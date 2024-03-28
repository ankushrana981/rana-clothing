import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
    signUpForm:any ={}
    name:string = ''
    email:string= ''
    password:string= ''
    confirmPassword:string= ''
    phone:string= ''
 
  constructor(){

  }

  ngOnInit() {
    
  }
  signUp(){
    this.signUpForm = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phone: this.phone
    }
    console.log(this.signUpForm,"Details ")
    this.signUpForm = {}
  }
}
