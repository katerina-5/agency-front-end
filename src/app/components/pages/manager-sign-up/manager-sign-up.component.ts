import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-sign-up',
  templateUrl: './manager-sign-up.component.html',
  styleUrls: ['./manager-sign-up.component.css']
})
export class ManagerSignUpComponent implements OnInit {

  hide = true;
  hideCode = true;

  constructor() { }

  ngOnInit() {
  }

  register(surname, name, fatherName, phone, email, login, password) {
    // TO DO:
    // register request to server
  }

}
