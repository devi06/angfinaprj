import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authService:any 
  constructor(authService:AuthService){
    this.authService = authService
  }

  login(uname:string, password:string){
    this.authService.inputUserName = uname
    this.authService.inputPassword = password
    this.authService.isUserLoggedIn()
  }

}
