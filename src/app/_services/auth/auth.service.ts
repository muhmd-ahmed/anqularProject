import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }
  login(body:any):Observable<{
    person: {
        _id: string,
        email: string,
        password: string,
        "__v": 0,
        "id": string
    },
    "token": string
}>{
  
  return this.httpclient.post<{
    person: {
        _id: string,
        email: string,
        password: string,
        "__v": 0,
        "id": string
    },
    "token": string
}>(environment.baseUrl+'user/login',body);
}
}