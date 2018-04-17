import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _authservice : AuthService) { 

  }

  ngOnInit() {
  }
  onsignin(form : NgForm){

    const email = form.value.email;
    const password = form.value.password;
    this._authservice.signinUser(email , password);
  }

}
