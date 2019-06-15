import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-sign-in',
  templateUrl: './manager-sign-in.component.html',
  styleUrls: ['./manager-sign-in.component.css']
})
export class ManagerSignInComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit() {
  }

  managerAuth(login, password) {
    // TO DO:
    // manager authorization request to server
  }

}
