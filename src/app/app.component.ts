import {  Component, HostListener, OnInit  } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  arr: any = [];
  

ngOnInit(): void {
    const elements = document.getElementsByClassName('section');
    for (let i = 0; i < elements.length; i++) {
        const el = elements[i] as HTMLElement;
        const rect = el.getBoundingClientRect();
        this.arr.push([el,rect.top ,rect.top + rect.height]);
    } 
}

    @HostListener('window:scroll', ['$event'])
     onWindowScroll(event: Event) {
      const sy = window.scrollY;
      let currSection = '';
        for(let e of this.arr) {
          if(sy >= e[1] && sy <=e[2]) {
           currSection = e[0].id;
          }
        }

        const anchorSelector = document.querySelectorAll('.nav-link');
        for (let a of Array.from(anchorSelector)) {
          a.classList.remove('active');
          if(a.getAttribute('href')=== '#'+currSection) {
            a.classList.add('active');
          }
        }
     }
}
