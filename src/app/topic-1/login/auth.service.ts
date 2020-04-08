import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService{
    constructor(private http: HttpClient){

    }
    private loginUrl="http://localhost:3000/api/login";

    loginUser(user){
        return this.http.post<any>(this.loginUrl, user)

    }
}