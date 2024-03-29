import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  bannerContent:any = {
    img:"/assets/images/banner-img-2.jpg",
    title:"Our Story"
  }
  constructor(){

  }
  ngOnInit() {
  }
}
