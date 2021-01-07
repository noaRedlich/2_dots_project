import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { BaseHttpService, BaseApiService } from "../../shared";
import { User_ContactDto } from '../../models';

@Injectable()
export class UserContactService extends BaseApiService {
    constructor(private baseHttpService: BaseHttpService) {
        super('UserContact');
    }
    getUserContacts(userId: number): Observable<User_ContactDto[]> {
        let url = this.actionUrl('GetUser_ContactsById');
        return this.baseHttpService.get<User_ContactDto[]>(url, userId);
    }
    UpdateUserContact(userContacts: User_ContactDto[]): Observable<User_ContactDto[]> {
        let url = this.actionUrl('UpdateUser_ContactByUserContactId');
        return this.baseHttpService.put<User_ContactDto[]>(url, userContacts);
    }
    craetFileWithOutMail(userId: number, userName: string): Observable<string> {
        let url = this.actionUrl('ExsportExelWhithOutMail');
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', userId.toString());
        params.set('userName', userName);
        return this.baseHttpService.get<string>(url,params);
    }
    sentInvationEmails(userId: number):Observable<any>{
        let url = this.actionUrl('sentInvationEmails');
        return this.baseHttpService.get<any>(url,userId);
    }

    updateMail(contactToUpdate:Array<User_ContactDto>):Observable<Array<User_ContactDto>>{
        debugger;
        let url = this.actionUrl('UpdateMail');
        return this.baseHttpService.put<Array<User_ContactDto>>(url,contactToUpdate);
    }
}