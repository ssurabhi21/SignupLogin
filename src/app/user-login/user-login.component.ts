import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''

  };

  
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit():void{
    const localData= localStorage.getItem('signUpUsers');
    if(localData !=null){
      this.signupUsers = JSON.parse(localData);

    }
  }
  onSignUp(){
    if(this.signupObj.userName==='' || this.signupObj.password==='' || this.signupObj.email===''){
      alert('Enter all details');
      return;
    }
    if (!this.validateEmail(this.signupObj.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if(this.signupObj.userName.length<5)
    {
      alert('Please enter username more than 5 characters'); 
      return;
    }
    if(this.signupObj.password.length<8)
    {
      alert('Please enter password with more than 8 characters')
      return;
    }
    
   
    this.signupUsers.push(this.signupObj);
   
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:'',
      email:'',
      password:''
    };
    alert('User signed up successfully!');

  }
  onLogin(): void {
    if (
      this.loginObj.userName === '' ||
      this.loginObj.password === ''
    ) {
      alert('Enter all details');
      return;
    }
  
    const isUserExist = this.signupUsers.find(
      (m) =>
        m.userName === this.loginObj.userName &&
        m.password === this.loginObj.password
    );
  
    if (isUserExist !== undefined) {
      this.authService.setLoggedInUsername(this.loginObj.userName);
      this.router.navigate(['/welcome']);
    } else {
      alert('Wrong credentials');
    }
  }
  
    validateEmail(email: string): boolean {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  }
  


