import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/customer';
  private delUrl = 'http://localhost:8080/delcustomer';



  public getData() {
    return this.http.get<Hero[]>(this.userUrl+"s");
         

}
public deleteUser(custId) {
  return this.http.delete(this.delUrl + "/"+ custId.id);
}

public createUser(cust){
  return this.http.post(this.userUrl,cust);
}

}
