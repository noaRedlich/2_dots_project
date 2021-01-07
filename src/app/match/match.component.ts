import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/Auth/contact.service';
import { User_ContactDto, DictDto } from '../models';
import { ContactDto } from '../models/dto/ContactDto';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import { UserContactService } from '../services/Auth/userContact.service';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  dict: any[];
  userId: number;
  returnData: boolean = false;
  listToUpdate: Array<User_ContactDto>;
  listOfUserContactId: Array<number>;
  val1: string;
  a33: string;
  items: MenuItem[];
  activeIndex:number;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private userContactService: UserContactService,private router:Router) {
    // this.route.queryParams.subscribe(params => {
    //   this.userId = params["id"];
    // });
    debugger
    this.userId = environment.id;
    this.listToUpdate = new Array<User_ContactDto>();
    this.listOfUserContactId = new Array<number>();

   this.dict = environment.match;
   this.returnData = true;
   this.dict.forEach(element => {
     this.listOfUserContactId.push(element.user_Contact.user_contactId);
   });


  }

  // async 
  ngOnInit() {
    debugger
    this.activeIndex=3;

    this.items=[
      {label:'מילוי פרטים'},
      {label:'פרטי הזמנה'},
      {label:'טעינת קובץ '},
      {label:'בדיקת התאמה'},
      // {label:'תשלום'},
    ]

    // await this.contactService.matchContacts(this.userId).subscribe(data => {
    //   debugger
    //   this.dict = data;
    //   this.returnData = true;
    //   data.forEach(element => {
    //     this.listOfUserContactId.push(element.user_Contact.user_contactId);
    //   });
    // });
  }

  checkboxChangging(contact: ContactDto, userContact: User_ContactDto) {
    debugger;
    if (this.listToUpdate.length > 0) {
      this.listToUpdate.forEach((item, index) => {
        if (item.user_contactId === userContact.user_contactId)
          this.listToUpdate.splice(index, 1);
      });
    }
    userContact.contactMail = contact.contactMail;
    this.listToUpdate.push(userContact);
    // this.listToUpdate.push(this.dictDto);
  }
  save() {
    debugger;
    this.userContactService.updateMail(this.listToUpdate).subscribe(
      data => {
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     "id": this.userId   
        //   }
        // };
        environment.id=this.userId
        debugger;
        this.router.navigate(["/table-user-contact"]).then((e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }
    );
  }
}
