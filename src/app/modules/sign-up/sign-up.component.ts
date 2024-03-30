import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers:[ApiService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
    signUpForm:any ={}
    name:string = ''
    email:string= ''
    password:string= ''
    phone:string= ''
 
  constructor(private api: ApiService){

  }

  ngOnInit() {
    
  }
  signUp(){
    this.signUpForm = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone
    }
    console.log(this.signUpForm,"Details ")
    this.api.signup(this.signUpForm).subscribe(data=>{
      console.log("signUp successful", data )
    }, error=>{
      console.log(error,"error")
    })
    this.signUpForm = {}
  }
  
}
