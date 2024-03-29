import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgIf],
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
}
