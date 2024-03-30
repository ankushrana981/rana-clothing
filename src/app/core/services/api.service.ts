import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.backendUrl;
  constructor(private http : HttpClient) { }

  login(data : any){
   return this.http.post(this.url + 'login', data)
  }
  signup(data: any){
    return this.http.post(this.url + 'signup', data)
  }
}
