import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, input, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

@Directive({
  selector: '[kingdomScrambleText]',
})
export class ScrambleTextDirective implements AfterViewInit, OnDestroy {

  speedInMiliseconds = input<number>(90);
  scrambleFrames = input<number>(8);
  
  private originalText = signal<string>('');
  private resolved: boolean[] = [];
  private frameCounters: number[] = [];
  private intervalId?: number;

  private platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  private readonly RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    if(!isPlatformBrowser(this.platformId)) return;

    this.originalText.set(this.el.nativeElement.innerHTML.trim());
    this.el.nativeElement.classList.add("scrambling-text");

    this.resolved = Array(this.originalText().length).fill(false);
    this.frameCounters = Array(this.originalText().length).fill(0);
    
    const loadingGateContainer = document.getElementById("loading-gate-container") as HTMLElement;
    if (!loadingGateContainer) {
      this.startScrumbling();
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

  private startScrumbling(): void{
    this.intervalId = window.setInterval(() => {
      let allResolved = true;
      let output = '';

      for(let i = 0; i < this.originalText().length; i++){
        if (this.resolved[i] || this.originalText()[i] === ' ') {
          output += this.originalText()[i];
          this.resolved[i] = true;
        } else {
          allResolved = false;
          if (this.frameCounters[i] >= this.scrambleFrames()) {
            this.resolved[i] = true;
            output += this.originalText()[i];
          } else {
            output += this.randomChar();
            this.frameCounters[i]++;
          }
        }
      }
      
      this.el.nativeElement.innerText = output;

      if (allResolved) {
        clearInterval(this.intervalId);
      }
      
    }, this.speedInMiliseconds())
  }

  private randomChar(): string{
    const chars = this.RANDOM_CHARS;
    return chars[Math.floor(Math.random() * chars.length)];
  }

  private setuObserver(): void{
    this.observer = new IntersectionObserver(entries => {
      const entry = entries[0];

      if(entry.isIntersecting){
        this.startScrumbling();
        this.observer?.disconnect();
      }
    }, {
      threshold: 1.0
    });

    this.observer.observe(this.el.nativeElement);
  }

}
