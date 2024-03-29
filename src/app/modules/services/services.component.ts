import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  bannerContent:any = {
    img:"/assets/images/services-banner.jpg",
    title:"Services"
  }
}
