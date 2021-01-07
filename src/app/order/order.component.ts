import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { OrderService } from '../services/Auth/order.service';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { OrderDto } from '../models';
import { MenuItem } from 'primeng/api';
import {EditorModule} from 'primeng/editor';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { environment } from '../../environments/environment.prod';



@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDto: OrderDto;
  numImg;
  myOrderForm: FormGroup;
  images: any[];
  items: MenuItem[];
  activeIndex: number=1;
  details;
  detailsOrder;
  dede
  myFile: File;
  uploadForm: FormGroup;


  

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder, private orderService: OrderService, private router: Router) {
    this.orderDto = new OrderDto();
    this.orderDto.userId=environment.id
    // this.route.queryParams.subscribe(params => {
    //   this.orderDto.userId = params["id"];
    // });
  }

  ngOnInit() {
    debugger
    this.items=[
      {label:'מילוי פרטים'},
      {label:'פרטי הזמנה'},
      {label:'טעינת קובץ '},
      {label:'בדיקת התאמה'},
      // {label:'תשלום'},
    ]
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.myOrderForm = new FormGroup({
      detailsOrder: new FormControl('', Validators.required)
    });
    this.images = [];
    this.images.push({ source: './assets/images/order.gif', title: 'Title 1111111' });
    this.images.push({ source: './assets/images/order.gif', title: 'Title 2', name: "ghgh", id: 111 });
    this.images.push({ source: './assets/images/order.gif', id: 3333 });
    this.images.push({ source: './assets/images/order.gif' });
    }
    uploadImage(event) {
      this.myFile = event.target.files[0];
      this.uploadForm.get('profile').setValue(this.myFile);
      let frmData = new FormData();
      frmData.append("file", this.uploadForm.get('profile').value);
      this.detailsOrder=frmData;
      
    }

  saveOrder(nameOrder) {
    this.detailsOrder = nameOrder;
    this.numImg = nameOrder;
  }

  saveAndContinue() {
    debugger
    if (this.detailsOrder == undefined) {
      debugger
      alert("יש לבחור הזמנה");
    }
    // if (!this.myOrderForm.valid){
    //    alert("יש להכניס פרטי הזמנה");

    // }
    if (this.myOrderForm.valid) {
      this.orderDto.invitationDetails = this.details;
      this.orderDto.invitationId = this.detailsOrder;
      this.orderDto.status = 1;
      this.orderService.addOrder(this.orderDto).subscribe(
        data => {
          if (data != null) {
            // let navigationExtras: NavigationExtras = {
            //   queryParams: {
            //     "id": data.userId
            //   }
            // };
            environment.id=data.userId;
            this.router.navigate(["/management-user-contact"]).then((e) => {
              if (e) {
                console.log("Navigation is successful!");
              } else {
                console.log("Navigation has failed!");
              }
            });
          }
        }

      )
    }
    else
      alert("יש להכניס פרטי הזמנה");
  }





}
