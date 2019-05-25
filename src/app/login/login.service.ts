import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoginService implements OnInit {
    public feed: any;
    constructor(private http: HttpClient) { }
    ngOnInit() { }

    checkRequest(data) {
        return this.http.get('/checkUsername/' + data ).toPromise().then(response => response) ;
    }

    loginRequest(data) {
        return this.http.post('/login', data).toPromise().then(resp => resp);
    }

    userRequest(data) {
        return this.http.post('/newUser', data).toPromise().then(resp => resp);
    }


}
