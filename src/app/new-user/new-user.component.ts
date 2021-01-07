import { Component, OnInit } from '@angular/core';
import { UserDto } from '../models';
import { UserService } from '../services/Auth/user.service';
import {  Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment.prod';

// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: UserDto;
  userFirstName;
  userLastName;
  userTelephone;
  userMail;
  userPassword;
  items1: MenuItem[];
  items: MenuItem[];
  activeIndex:number;
  activeIndex1:number;
  num:number;
  display:number;

  constructor(private userService: UserService, private router: Router,private route:ActivatedRoute) {
    this.user = new UserDto();
    this.display=environment.btn;
    // this.route.queryParams.subscribe(params => {
    // this.display=params["btn"];

    // });
  }
  ngOnInit() {
    this.activeIndex=0;
    this.items=[
      {label:'מילוי פרטים'},
      {label:'פרטי הזמנה'},
      {label:'טעינת קובץ '},
      {label:'בדיקת התאמה'},
      // {label:'תשלום'},
    ]
    this.activeIndex1=0;
    this.items1=[
      {label:'מילוי פרטי משתמש'},
     
     
    ]
  }

  login() {
    this.items1 = [
      { label: 'משתמש חדש', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/new-user' },
      // { label: 'manager', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/manager' },
      { label: 'מנוי', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/subscription' }
    ];
    this.user.userFirstName = this.userFirstName
    this.user.userLastName = this.userLastName
    this.user.userPassword = this.userPassword
    this.user.userTelephone = this.userTelephone
    this.user.userMail = this.userMail

    this.userService.addUser(this.user).subscribe(
      data => {
        if (data != null) {
          alert("ברוכה הבאה שמחים להצטרפותך"+" "+data.userFirstName)

          // let navigationExtras: NavigationExtras = {
          //   queryParams: {
          //     "id": data.userId
          //   }
          // };
environment.id=data.userId;
          this.router.navigate(["/order"]).then((e) => {
            if (e) {
              console.log("Navigation is successful!");
            } else {
              console.log("Navigation has failed!");
            }
          }
          );
        }
        else {
          alert("הוספת המשתמש נכשלה")
          this.userFirstName = "";
          this.userLastName = "";
          this.userPassword = "";
          this.userTelephone = "";
          this.userMail = "";
        }
      });

  }
  save(){
    debugger;
    this.user.userFirstName = this.userFirstName
    this.user.userLastName = this.userLastName
    this.user.userPassword = this.userPassword
    this.user.userTelephone = this.userTelephone
    this.user.userMail = this.userMail

    this.userService.addUser(this.user).subscribe(
      data => {
        debugger;
        if (data == null) {
          alert("הוספת המשתמש נכשלה")
          this.userFirstName = "";
          this.userLastName = "";
          this.userPassword = "";
          this.userTelephone = "";
          this.userMail = "";
        }
        else
        {
          

          alert(data.userFirstName+"ברוכה הבאה שמחים להצטרפותך")
        }
      });
      this.router.navigate(["/manager"]).then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  }

}
