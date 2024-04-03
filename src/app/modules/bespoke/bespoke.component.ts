import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-bespoke',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './bespoke.component.html',
  styleUrl: './bespoke.component.scss'
})
export class BespokeComponent {
  bannerContent:any = {
    img:"/assets/images/fabric-img-2.jpg",
    title:"Be spoke"
  }
}
