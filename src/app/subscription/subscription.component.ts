import { Component, OnInit } from '@angular/core';
import { UserDto } from '../models';
import { UserService } from '../services/Auth/user.service';
import { async } from '@angular/core/testing';
import { Router, NavigationExtras } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment.prod';
// import { MatProgressSpinnerModule } from '@angular/material';
import { NgxSpinnerService } from "ngx-spinner";  



@Component({
  selector: 'subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  constructor(private userService: UserService,private router: Router,private SpinnerService: NgxSpinnerService) { }
  userPassword;
  userMail;
  userStatus
  activeIndex: number;
  errorMail:String;
  errorPassword:String;
  
  items: MenuItem[];

  ngOnInit() {

    this.activeIndex=0;
   this.items=[
     {label:'מילוי פרטים'},
     {label:'פרטי הזמנה'},
     {label:'טעינת קובץ '},
     {label:'בדיקת התאמה'},
    //  {label:'תשלום'},
   ]
   this.errorMail=""
   this.errorPassword=""
  }
  login() {
    if(this.userMail==null){
      this.errorMail="!זהו שדה חובה"
    }
    if(this.userPassword==null){
      this.errorPassword="!זהו שדה חובה"
    }
    if(this.userMail==null && this.userPassword!=null){
      this.errorMail="!זהו שדה חובה"
      this.errorPassword=""

    }
    if(this.userPassword==null && this.userMail!=null){
      this.errorPassword="!זהו שדה חובה"
      this.errorMail=""

    }
    if(this.userMail!=null && this.userPassword!=null){
      this.SpinnerService.show();  

      this.userService.getUserByMail(this.userMail,this.userPassword).subscribe(
        (data: any) => {
          debugger;
          this.SpinnerService.hide();  

          if(data==null){
            debugger
          // alert("המייל או הסיסמא שגויים");
          this.errorMail="!מייל לא קיים"
          this.errorPassword="!סיסמא לא נכונה"
          this.userMail="";
          this.userPassword=""; 
          return;
          }
          if(data.userMail=="noa9394@gmail.com")
          {
            debugger
         return this.router.navigate(["/manager"]).then( (e) => {
              if (e) {
                console.log("Navigation is successful!");
              } else {
                console.log("Navigation has failed!");
              }
            });
           }
         else {
          environment.id=data.userId;
          debugger
          //  if (data != null) {
            //  debugger
              // let navigationExtras: NavigationExtras = {
              //   queryParams: {
              //     // "id": data.m_Item2.userId
              //     "id": data.userId
              //   }
              // };
              this.router.navigate(["/order"]).then( (e) => {
                if (e) {
                  console.log("Navigation is successful!");
                } else {
                  console.log("Navigation has failed!");
                }
              });
            // }
            // else {
            //   debugger
            //   alert("המייל או הסיסמא שגויים");
            // this.userMail="";
            // this.userPassword="";  
            // }
         }
       
        }
      );
    }
   
  }

}
