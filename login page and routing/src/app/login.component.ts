import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {
  UserId:string = '';
  password:string ='';
  message:string='';
  constructor(private router: Router) {};
  Login(){

    // Basic validation
    if (!this.UserId || !this.password) {
      this.message = 'Please fill required fields ❌';
      return;
    }

    if(this.UserId =='swapnil' && this.password=='Sw@pnil123')
    {
      this.message='Login Successful✅';
      this.router.navigate(['/employee']);
      
    }else
    {
      this.message='Login Failed❌';
      this.UserId='';
      this.password='';
    }
  }
  name = 'Sing In';
}

