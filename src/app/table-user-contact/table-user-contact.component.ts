import { Component, OnInit } from '@angular/core';
import { UserContactService } from '../services/Auth/userContact.service';
import { User_ContactDto } from '../models';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { products } from './products';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'table-user-contact',
  templateUrl: './table-user-contact.component.html',
  styleUrls: ['./table-user-contact.component.css']
})
export class TableUserContactComponent implements OnInit {
  userId
  display = false
  activeIndex: number;
  items: MenuItem[];
  headElements = ['הוסף/הסר', 'תואר ראשוני', 'שם פרטי', 'שם משפחה', 'בן זוג', 'תואר סופי',
    'כתובת', 'עיר', 'טלפון', 'פרטים', 'מייל'];
  // statusState: number[]= [11];
  statusState: boolean[] = [];

  dataReturn = true;
  constructor(private route: ActivatedRoute, private userContactService: UserContactService, private router: Router) {
    // this.route.queryParams.subscribe(params => {
    //   this.userId = params["id"];
    // });
    this.userId=environment.id
  }

  userContacts: User_ContactDto[];
  contactToUpdate: Array<User_ContactDto> = new Array<User_ContactDto>();

  ngOnInit() {
    this.activeIndex=0;
    this.userId=environment.id
    // this.items=[
    //   {label:'אנשי הקשר שלי'},
     
      
    // ]
    debugger;
    this.route.queryParams.subscribe(params => {
      debugger
      this.userId = environment.id;
      this.userContactService.getUserContacts(this.userId).subscribe(
        data => {
          for (var i = 0; i < data.length; i++) {
            if (data[i].status == 0)
              this.statusState.push(false);
            else
              this.statusState.push(true);
          }
          this.dataReturn = false;
          this.userContacts = data;
          this.display = true;
        }
      );
    });
  }

  checkboxChangging(userContact: User_ContactDto) {
    if (this.contactToUpdate.includes(userContact))
      this.contactToUpdate.forEach((item, index) => {
        if (item.user_contactId === userContact.user_contactId)
          this.contactToUpdate.splice(index, 1);
      });
    else {
      if (userContact.status == 1)
        userContact.status = 0;
      else
        userContact.status = 1;
      this.contactToUpdate.push(userContact);
    }
  }

back() {
  if (this.contactToUpdate.length > 0) {
    this.userContactService.UpdateUserContact(this.contactToUpdate).subscribe(
      data => {
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     "id": this.userId
        //   }
        // };
        environment.id=this.userId;
        this.router.navigate(["/management-user-contact"]).then((e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      }
    );
  }
  else {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     "id": this.userId
    //   }
    // };
    environment.id=this.userId;

    this.router.navigate(["/management-user-contact"]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
  saveAndContinue() {
    if (this.contactToUpdate.length > 0) {
      this.userContactService.UpdateUserContact(this.contactToUpdate).subscribe(
        data => {
          alert("הזמנתך הסתיימה בהצלחה ההנהלה תיצור איתך קשר במייל בימים הקרובים")
          this.router.navigate(["/login-page"]).then((e) => {
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          });
        }
      );
    }
    else {
      alert("הזמנתך הסתיימה בהצלחה ההנהלה תיצור איתך קשר במייל בימים הקרובים")

      this.router.navigate(["/login-page"]).then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    }
  }
}

