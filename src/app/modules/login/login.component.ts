import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule,HttpClientModule],
  providers:[ApiService ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
name :string = ''
password:string =''
constructor(private api:ApiService){

}
ngOnInit(): void {
}
submitForm(){
  console.log(this.name)
  console.log(this.password)
  var data = {
    name: this.name,
    password:this.password
  } 
  console.log(data,"data")
  this.api.login(data).subscribe(data =>{
    console.log(data)
  }, error =>{
    console.log(error,"error")
  })

}
}
