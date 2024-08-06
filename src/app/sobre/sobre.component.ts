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
    const elements = document.querySelectorAll('.animated-text');
    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('animated');
        element.classList.remove('hidden');
      }
    });
  }
}