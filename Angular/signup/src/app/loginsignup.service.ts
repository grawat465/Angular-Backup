
import { Customer } from './customer';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { text } from '@angular/core/src/render3';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class LoginsignupService {

  constructor(private http:HttpClient) { }

  private userUrl = '/';


public requestLogin(Username)
{
  
  return this.http.get<Customer>(this.userUrl+"login"+"/"+Username);
}


public requestSignUp(user)
{
  alert("Haha");
  return this.http.post(this.userUrl+"signup",user);
}


}
