import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  bannerContent:any = {
    img:"/assets/images/contact-banner.jpg",
    title:"lets connect"
  }
}
