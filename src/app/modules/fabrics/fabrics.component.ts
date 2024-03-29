import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-fabrics',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './fabrics.component.html',
  styleUrl: './fabrics.component.scss'
})
export class FabricsComponent {
  bannerContent:any = {
    img:"/assets/images/banner-img.png",
    title:"Fabrics"
  }
}
