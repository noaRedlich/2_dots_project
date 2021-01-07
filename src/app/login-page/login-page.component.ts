import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { Router, NavigationExtras } from '@angular/router';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  itemsMenu: MenuItem[];
  items: MenuItem[];
  activeIndex: number = 0;
  items1: MenuItem[];
  flag: boolean;
  btnn:number;
  url = "./assets/images/תמונה1.GIF"

  constructor(private router: Router) { }

  ngOnInit() {
   debugger;
    this.flag = true;
    this.btnn=1;
        // this.itemsMenu = [
    //   { label: 'משתמש; חדש', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/new-user' },
    //   { label: 'מנוי', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/subscription' }
    // ];


    // this.itemsMenu = [
    //   { label: 'משתמש חדש', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/new-user' },
    //   { label: 'manager', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/manager' },
    //   { label: 'מנוי', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/subscription' }
    // ];

    this.items1 = [
      { label: 'משתמש חדש', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/new-user' },
      // { label: 'manager', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/manager' },
      { label: 'מנוי', icon: 'fa fa-fw fa-user', url: 'http://localhost:4200/subscription' }
    ];

  }
  newUser() {
    environment.btn=this.btnn;
    this.flag = false;
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     "btn": this.btnn
    //   }
    // };
    this.router.navigate(["/new-user"]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
 
  subscription() {
    this.flag = false;
    this.router.navigate(["/subscription"]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
