import { Component, HostListener, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shouldDisplay  = window.innerWidth <= 600;
  isMobileView = window.innerWidth <= 600;

  onCrossClick() {
    this.shouldDisplay = !this.shouldDisplay;
  }

  ngOnInit(): void {
      gsap.from('.navbar',{
        y: -100,
        delay: 0.25,
        duration: 1
      })
 
  }

}
