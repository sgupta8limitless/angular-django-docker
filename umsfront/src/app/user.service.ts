import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<any> {
    
    return this.httpClient.get("api/users/")
    
  }

  getUser(id:number): Observable<any> {
    
    return this.httpClient.get("api/users/"+id)
    
  }


}
