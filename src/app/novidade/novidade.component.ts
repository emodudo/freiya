import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-novidade',
  templateUrl: './novidade.component.html',
  styleUrls: ['./novidade.component.css']
})
export class NovidadeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    this.startCountdown(new Date('2024-09-15T23:59:59'));
  }

  ngAfterViewInit(): void {
    this.initObservers();
  }

  initObservers(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('animated');
          observer.unobserve(target); // Para evitar que a animação seja repetida
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animated-img').forEach(element => {
      observer.observe(element);
    });

    document.querySelectorAll('.animated-text').forEach(element => {
      observer.observe(element);
    });
  }

  startCountdown(targetDate: Date): void {
    const countdownElement = {
      days: document.getElementById('days'),
      hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'),
      seconds: document.getElementById('seconds')
    };

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        if (countdownElement.days) countdownElement.days.innerText = '0';
        if (countdownElement.hours) countdownElement.hours.innerText = '0';
        if (countdownElement.minutes) countdownElement.minutes.innerText = '0';
        if (countdownElement.seconds) countdownElement.seconds.innerText = '0';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (countdownElement.days) countdownElement.days.innerText = days.toString();
      if (countdownElement.hours) countdownElement.hours.innerText = hours.toString();
      if (countdownElement.minutes) countdownElement.minutes.innerText = minutes.toString();
      if (countdownElement.seconds) countdownElement.seconds.innerText = seconds.toString();
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  }
}
