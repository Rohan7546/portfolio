import { Component, OnInit } from '@angular/core';
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
public ishover= false;

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
      gsap.from(['.about-me-right span', '.about-me-right p'],{
        opacity: 0.4,
        y: 10,
        x: 10,
        scale: 0.6,
        delay: 1,
        duration: 1,
        scrollTrigger : {
          trigger: '.about-me',
          pin: true,
          start: 'top top',
          end: '+=500',
          scrub: 1,
        }
      })
      gsap.from(['.about-me-right .info'],{
        opacity: 0,
        y: 100,
        x: 10,
        scale: 0.6,
        delay: 0.25,
        duration: 0.5,
        stagger: 1,
        scrollTrigger : {
          pin: true,
          start: 'top top',
          end: '+=500'
        }
      })
  }

 
}
