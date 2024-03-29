import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-alterations',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './alterations.component.html',
  styleUrl: './alterations.component.scss'
})
export class AlterationsComponent {
  bannerContent:any = {
    img:"/assets/images/banner-img-4.jpg",
    title:"alterations"
  }
}
