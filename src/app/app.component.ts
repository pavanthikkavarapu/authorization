import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(){

  }
  ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyD7HmHcJ17banidEZ49ewLxH6mGql78kRA",
        authDomain: "myproject-2c089.firebaseapp.com"
      });
  }
}
