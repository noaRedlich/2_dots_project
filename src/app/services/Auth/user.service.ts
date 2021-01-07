import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, Subscribable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { BaseHttpService, BaseApiService } from "../../shared";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDto } from "../../models"


@Injectable()
export class UserService extends BaseApiService {
    constructor(private baseHttpService: BaseHttpService,private http: HttpClient) {
        super('User');
    }

    getUsers(): Observable<UserDto[]> {
        let url = this.actionUrl('GetUsers');
       return this.baseHttpService.get<UserDto[]>(url);
    }

    getUserByMail(userMail: string, password: string): Observable<any> {
        let url = this.actionUrl('GetByMail');
        let params: URLSearchParams = new URLSearchParams();
        if (typeof userMail === "undefined" || typeof password === "undefined")
        {
            userMail = "";
            password = "";
        }
        params.set('mail', userMail);
        params.set('password', password);
        return this.baseHttpService.get<any>(url,params);
    }
    
    addUser( userDto:UserDto) :Observable<UserDto>{
        let url = this.actionUrl('AddUser');
        if (typeof userDto.userFirstName === "undefined" || typeof userDto.userPassword === "undefined"||typeof userDto.userFirstName === "undefined"||
        typeof userDto.userLastName === "undefined"||typeof userDto.userTelephone === "undefined")
        {
            userDto.userFirstName = "";
            userDto.userLastName="";
            userDto.userTelephone="";
            userDto.userPassword = "";
            userDto.userMail="";
        }
        return this.baseHttpService.post<UserDto>(url,userDto);
    }
}