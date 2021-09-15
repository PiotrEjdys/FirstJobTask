import { EventEmitter } from "@angular/core";

export class AuthService{
  loggedIn = false;
  changeLog = new EventEmitter<boolean>();
  logout(){
    if(confirm('Do you want to logout ?')){
      this.loggedIn =false;
    this.changeLog.emit(this.loggedIn);
    }


  }
  login(){
    this.loggedIn = true;
    this.changeLog.emit(this.loggedIn);
  }
}
