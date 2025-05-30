import { Component, OnInit } from '@angular/core';
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  ngOnInit(): void {
      gsap.registerPlugin(ScrollTrigger);

    gsap.from('.row',{
      opacity: 0,
      delay: 1,
      x: -100,
      duration: 0.2,
      scrollTrigger : {
        trigger: '.project',
        start: 'top 70%',
        end: '+=500',
        scrub: 1
      }
    });

  }
}
