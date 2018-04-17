import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

   AllowNewserver:boolean = false;
   id : any = 10;
   token : string = 'abcd12345xyz';
   serverName="";
  servercreationstatus = 'server was not created !!!!';
  serverCreated = false;
  constructor() {
 
    setTimeout(() => {
     
     this.AllowNewserver= true;

    }    ,2000)

   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servercreationstatus = 'server was succesfully created !!!! name is '+ this.serverName;
  }
  onUpdateServerName(event : Event){

this.serverName= (<HTMLInputElement>event.target).value;
  }

}
