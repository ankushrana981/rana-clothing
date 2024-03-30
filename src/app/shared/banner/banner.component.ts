import { NgIf } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
 @Input() bannerContent:any={};
  currentUrl:string='';
 constructor(private route: ActivatedRoute){

  }
  ngOnInit():void {
    this.currentUrl = this.route.snapshot.url.join('/');
    console.log(this.route.snapshot.url.join('/'), "this.route.snapshot.url")
  }
  onarrowClick(){
  window.scrollTo({
    behavior:'smooth',
    top: 780
  })
  }
}
