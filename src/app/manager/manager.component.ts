import { Component, OnInit } from '@angular/core';
import { ManagerDetailsOrderDto } from '../models';
import { OrderService } from '../services/Auth/order.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  display=false;
  btnn:number;
  managerId:number;
  order:string
  headElements = ['שם הלקוח', 'פרטי ההזמנה','סיום ההזמנה'];
  ListOrderDetails: ManagerDetailsOrderDto[];
  activeIndex: number;
  items: MenuItem[];

  constructor(private route: ActivatedRoute,private router: Router,private orderService: OrderService) {
    this.route.queryParams.subscribe(params => {
      debugger
    if(params["id"]==null)
    {
      debugger;
      this.router.navigate(["/logIn"]).then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    }
    this.managerId = params["id"];
    });
   }
  
  ngOnInit() {
    this.activeIndex=0;
    this.items=[
      // {label:'טבלת לקוחות'},
      // {label:'פרטי המזמין'},
      
    ]
    debugger;
    this.btnn=2;
    this.orderService.getAllOrders().subscribe(
      data => {
        debugger
        this.ListOrderDetails = data;
        this.display=true;
      }
    );
  }
  newContact() {
    debugger
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     "btn": this.btnn
    //   }
    // };
  environment.btn=this.btnn;
    this.router.navigate(["/new-contact"]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     "btn": this.btn
    //   }
    // };
    // this.router.navigate(["/new-user",navigationExtras]).then((e) => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
  }
  orderDetails(lod){
    debugger
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     "orderId": lod.orderId
    //   }
    // };
    environment.orderId=lod.orderId;
    this.router.navigate(["/order-details"]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  
  }

  finish(lod){
    debugger
    this.orderService.UpdateStatus(lod.orderId).subscribe(
    // this.orderService.UpdateStatus(lod.orderId).subscribe(
      data => {
        
        this.ngOnInit();
      }
    );
  }

  showOrderDetails(lod){
    this.orderService.GetOrderByOrderId(lod.orderId).subscribe(
      data => {
        debugger
      //  this.order=data.USERS.userId;
       
      }
    );
  }




}
