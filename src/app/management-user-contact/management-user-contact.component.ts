import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ContactService } from '../services/Auth/contact.service';
import { OrderService } from '../services/Auth/order.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment.prod';



@Component({
  selector: 'management-user-contact',
  templateUrl: './management-user-contact.component.html',
  styleUrls: ['./management-user-contact.component.css']
})
export class ManagementUserContactComponent implements OnInit {
  userId
  uploadForm: FormGroup;
  myFile: File;
  items: MenuItem[];
  activeIndex: number = 2;

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder, private router: Router, private contactService: ContactService, private orderService: OrderService) {
    // this.route.queryParams.subscribe(params => {
    //   this.userId = params["id"];
    // });
    this.userId=environment.id;
  }

  ngOnInit() {
debugger;
    this.items = [
      { label: 'מילוי פרטים' },
      { label: 'פרטי הזמנה' },
      { label: 'טעינת קובץ ' },
      {label:'בדיקת התאמה'},
      // {label:'תשלום'},
    ]

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  changeName(event) {
    debugger;
    this.myFile = event.target.files[0];
    debugger
    this.uploadForm.get('profile').setValue(this.myFile);
    debugger;
    let frmData = new FormData();
    frmData.append("file", this.uploadForm.get('profile').value);
    debugger;
    this.orderService.upload(frmData, this.userId).subscribe(sucsses => {
      debugger;
      environment.id=this.userId;
     environment.match=sucsses;

      // let navigationExtras: NavigationExtras = {
      //   queryParams: {
      //     "id": this.userId,
      //     "match": sucsses
      //   }
      // };
      debugger
      if (sucsses != null) {
        this.router.navigate(["/match"]).then((e) => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
     } });
  
}

getUserContacts() {
  // let navigationExtras: NavigationExtras = {
  //   queryParams: {
  //     "id": this.userId
  //   }
    
  // };
  debugger;
  this.router.navigate(["/table-user-contact"]).then((e) => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
  });
}

myFunction() {
  window.open("./assets/images/address.png","_blank");
}

  // onUpload(event) {
  //   for (let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }

  // this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });}


  // upload() {
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       "id": this.userId
  //     }
  //   };
  //   this.router.navigate(["/match"], navigationExtras).then((e) => {
  //     if (e) {
  //       console.log("Navigation is successful!");
  //     } else {
  //       console.log("Navigation has failed!");
  //     }
  //   });
  // }
}