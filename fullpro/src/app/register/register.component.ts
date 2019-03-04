import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/contact.model';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contact: ContactModel;
  myform;

  constructor(private registerService: RegisterService) { 
    this.contact = <ContactModel>{}
  }

  ngOnInit() {
  }
  registerUser() {
    this.registerService.contact(this.contact).subscribe(contactRes => {
      this.contact = contactRes;
    });

  }



    
  }

