import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  private images: HTMLElement[] = [];
  private currentIndex: number = 0;
  private interval: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.images = Array.from(document.querySelectorAll('.custom-video'));
    this.startImageRotation();
  }

  startImageRotation(): void {
    if (this.images.length === 0) return;

    this.images[this.currentIndex].classList.add('active');
    this.interval = setInterval(() => {
      this.images[this.currentIndex].classList.remove('active');
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.images[this.currentIndex].classList.add('active');
    }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}