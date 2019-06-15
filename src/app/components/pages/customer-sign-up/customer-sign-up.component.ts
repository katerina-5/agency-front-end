import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  register(surname, name, fatherName, phone, email, login, password) {
    // TO DO:
    // register request to server
  }

}
