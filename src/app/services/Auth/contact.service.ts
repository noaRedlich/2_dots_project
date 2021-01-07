import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { BaseHttpService, BaseApiService } from "../../shared";
import {DictDto } from '../../models';
import { ContactDto } from '../../models/dto/ContactDto';
// import { ContactDto } from 'src/app/models/dto/ContactDto';

@Injectable()
export class ContactService extends BaseApiService {
    constructor(private baseHttpService: BaseHttpService) {
        super('Contact');
    }
    matchContacts(userId:number):Observable<Array<DictDto>>{
        let url = this.actionUrl('MatchContacts');
        return this.baseHttpService.get<Array<DictDto>>(url,userId);
    }
    updateMail(listToUpdate:Array<DictDto>):Observable<Array<DictDto>>{
        let url = this.actionUrl('UpdateMail');
        return this.baseHttpService.put<Array<DictDto>>(url,listToUpdate);
    }
    addContact(contactdto:ContactDto):Observable<Array<DictDto>>{
        debugger
        let url = this.actionUrl('Post');
        return this.baseHttpService.post<Array<DictDto>>(url,contactdto);
    }
}