import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClinet: HttpClient) { }

  contact(user: ContactModel): Observable<any> {
    return this.httpClinet.post('http://localhost:8888/save', user); 


  }
}


