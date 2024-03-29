import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  bannerContent:any = {
    img:"/assets/images/banner-img-1.jpg",
    title:"Rana's Clothing",
    subTitle:"World Best Tailors",
    descrp:'Tradition',
    button:'40 years of bespoke fashion'
}
constructor(){

}
ngOnInit(): void {
  
}
}
