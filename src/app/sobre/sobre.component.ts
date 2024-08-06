import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const textElements = document.querySelectorAll('.animated-text');
    textElements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('animated');
      }
    });

    const imageElements = document.querySelectorAll('.animated-img');
    imageElements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom > 0) {
        element.classList.add('fadeIn');
      }
    });
  }
}
