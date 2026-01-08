import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, input, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

@Directive({
  selector: '[kingdomTypingText]',
})
export class TypingText implements AfterViewInit, OnDestroy {

  speedInMiliseconds = input<number>(60);
  
  private originalText = signal<string>('');
  private index = 0;
  private intervalId?: number;
  private platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    if(!isPlatformBrowser(this.platformId)) return;

    this.originalText.set(this.el.nativeElement.innerHTML.trim());

    this.el.nativeElement.innerHTML = '';
    this.el.nativeElement.classList.add("typing-text");
    
    const loadingGateContainer = document.getElementById("loading-gate-container") as HTMLElement;
    if (!loadingGateContainer) {
      this.startTyping();
      return;
    }
    loadingGateContainer.addEventListener('animationend', () => {
      this.setuObserver();
    }, { once: true })

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.observer?.disconnect();
  }

  private startTyping(): void{
    this.intervalId = window.setInterval(() => {

      const text = this.originalText();

      if(this.index >= text.length){
        this.el.nativeElement.classList.add("completed");
        clearInterval(this.intervalId);
        return;
      }

      const char = text[this.index++];

      this.el.nativeElement.innerHTML += char;

    }, this.speedInMiliseconds());
  }

  private setuObserver(): void{
    this.observer = new IntersectionObserver(entries => {
      const entry = entries[0];

      if(entry.isIntersecting){
        this.startTyping();
        this.observer?.disconnect();
      }
    }, {
      threshold: 1.0
    });

    this.observer.observe(this.el.nativeElement);
  }

}
