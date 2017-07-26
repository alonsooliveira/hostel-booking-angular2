import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

    private serviceUrl: string = 'http://localhost:56900/'

    constructor(private http: Http) { }

    register(user: any) {
        console.log(user);
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'v1/register', user, options)
            .map((res: Response) => res.json());
    }

    login(model: any) {
        var data = "grant_type=password&email=" + model.email + "&password=" + model.password;
        let headers = new Headers({ 'content-type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'v1/authenticate', data, options)
            .map((res: Response) => res.json());
    }
}