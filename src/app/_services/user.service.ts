import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  PATH_OF_API = "http://localhost:9090";

  requestHeader = new HttpHeaders(
    {"No-Auth" : "True"}
  )
  public login(loginData:any){
    return this.httpClient.post(this.PATH_OF_API + "/authenticate", loginData, {headers:this.requestHeader})
  }
}
