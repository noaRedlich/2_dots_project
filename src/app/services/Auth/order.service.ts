import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { BaseHttpService, BaseApiService } from "../../shared";
import { OrderDto, ManagerDetailsOrderDto, User_ContactDto } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService extends BaseApiService {
    constructor(private baseHttpService: BaseHttpService,private _http:HttpClient) {
        super('Order');
    }
    addOrder(orderDto: OrderDto): Observable<OrderDto> {
        let url = this.actionUrl('AddOrder');
        if (typeof orderDto.status === "undefined" ||
            typeof orderDto.invitationId === "undefined" || typeof orderDto.invitationDetails === "undefined") {
            return null;
        }
        return this.baseHttpService.post<OrderDto>(url, orderDto);
    }
    getAllOrders(): Observable<any[]> {
        let url = this.actionUrl('GetAllOrders');
        return this.baseHttpService.get<any[]>(url);
    }

    getAllOrderDetails(orderId: number): Observable<any[]> {
        debugger
        let url = this.actionUrl('GetAllOrderDetails');
        return this.baseHttpService.get<any[]>(url, orderId);
    }
    GetOrderByOrderId(orderId: number): Observable<any[]> {
        debugger
        let url = this.actionUrl('GetOrderByOrderId');
        return this.baseHttpService.get<any[]>(url, orderId);
    }
    UpdateStatus(orderId: number): Observable<any[]> {
        let url = this.actionUrl('UpdateStatus');
        return this.baseHttpService.get<any[]>(url, orderId);
    }
    getTableUserContacts(userId: number): Observable<any[]> {
        let url = this.actionUrl('GetTableUserContacts');
        return this.baseHttpService.get<any[]>(url, userId);
    }
    // UpdateStatus(orderId: number): Observable<any[]> {
    //     let url = this.actionUrl('UpdateStatus');
    //     return this.baseHttpService.get<any[]>(url, orderId);
    // }
    upload(frmData: FormData, userId: Number):Observable<any[]>{
        debugger;
        return this._http.post<any[]>("http://localhost:10082/api/Order/UploadFiles?id="+userId, frmData);
    }



}