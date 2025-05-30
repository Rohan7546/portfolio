import { Component, HostListener, OnInit } from '@angular/core';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  message = [
    ' Rohan Prakash ',
    ' SDE-Frontend ',
    ' Tech Enthusiast ',
    ' Problem Solver ',
  ];
  tl = gsap.timeline({ repeat: -1 });
  homeActive = false;
  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin);
    gsap.from('.right-container img', {
      scale: 0.5,
      delay: 0.5,
      duration: 1,
    });
    for (let el of this.message) {
      this.tl.to('#my-span', {
        text: el,
        duration: 2.5,
      });
    }

    gsap.from('.after-greet-intro', {
    y: -100,
    scale: 0.7,
    duration: 0.7,
    x: 100,
    opacity: 0.4
    });

    gsap.to(".banner-front span", {
      duration: 4,
      delay: 1, 
      xPercent: -1000,
      ease: "none",
      repeat: -1,
    });
  }


 
}


