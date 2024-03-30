import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private elRef: ElementRef){

  }
  onclickToggle() {
    const navbarCollapse = this.elRef.nativeElement.querySelector('.navbar-collapse');
    const isCollapsed = navbarCollapse.classList.contains('show-toogle');
    console.log(isCollapsed, navbarCollapse,"classes");
    
    if (isCollapsed) {
        navbarCollapse.classList.remove('show-toogle');
    } else {
        navbarCollapse.classList.add('show-toogle');
    }
}
}
