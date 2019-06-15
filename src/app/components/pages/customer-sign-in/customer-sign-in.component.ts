import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-sign-in',
  templateUrl: './customer-sign-in.component.html',
  styleUrls: ['./customer-sign-in.component.css']
})
export class CustomerSignInComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  auth(login, password) {
    // TO DO:
    // authorization request to server
  }

}
