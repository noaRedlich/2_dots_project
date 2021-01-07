import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/Auth/order.service';
import { User_ContactDto } from '../models';
import { Observable } from 'rxjs/Observable';
import { UserContactService } from '../services/Auth/userContact.service';
import { MenuItem } from 'primeng/api';
import { environment } from '../../environments/environment.prod';




@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  value;
  orderId: number
  display: boolean = false
  orderDetails: any;
  contactToUpdate:Array<User_ContactDto> = new Array<User_ContactDto>();
  activeIndex: number;
  items: MenuItem[];
  headElements = ['תואר ראשוני', 'שם פרטי', 'שם משפחה', 'בן זוג', 'תואר סופי',
    'כתובת', 'עיר', 'טלפון', 'פרטים', 'מייל'];
  tableUserContacts: Observable<User_ContactDto[]>;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private userContactService: UserContactService) {
   
     this.route.queryParams.subscribe(params => {
      this.orderId = environment.orderId;
      this.orderService.getAllOrderDetails(this.orderId).subscribe(
        data => {
          debugger
          this.orderDetails = data;
          this.tableUserContacts = this.orderService.getTableUserContacts(this.orderDetails[0].userId)
        }
      );
    });
  }
  ngOnInit() {
    this.activeIndex=0;
    this.items=[
      // {label:'טבלת לקוחות'},
      // {label:'פרטי המזמין'},
      
    ]
  }
  craetFileWithOutMail() {
    this.userContactService.craetFileWithOutMail(this.orderDetails[0].userId, this.orderDetails[0].userName).subscribe(
      data => {
        debugger
        alert("the file craeted on path " + data)
      }
    );
  }

  sentInvationEmails(event) {
    this.userContactService.sentInvationEmails(this.orderDetails[0].userId).subscribe(
      data => {
        debugger
      }
    );
  }
aaa(event){
  debugger
}
  changeMail(uc) {
    if (this.contactToUpdate.includes(uc))
      this.contactToUpdate.forEach((item, index) => {
        if (item.user_contactId === uc.user_contactId)
          this.contactToUpdate.splice(index, 1);
      });
    this.contactToUpdate.push(uc);
  }
  saveMails(){
      this.userContactService.updateMail(this.contactToUpdate).subscribe(
        data => {
          debugger
        })

  }
}
