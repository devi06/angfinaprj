import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  inputUserName: string =''
  inputPassword: string =''
  dbUserName:string = "admin" ; dbPassword ="admin123"
  flag:boolean = false
  isUserLoggedIn(){
   if(this.dbUserName === this.inputUserName && this.dbPassword === this.inputPassword){
     alert("user is authenticated")
     this.flag = true
     return true
   }
   else{
    alert("not authenticated")
    this.flag = false
    return false
   }
  }
}
