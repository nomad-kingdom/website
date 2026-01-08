import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostListener, inject, input, OnDestroy, PLATFORM_ID, signal } from '@angular/core';

@Directive({
  selector: '[kingdomScrambleTextOnHover]',
})
export class ScrambleTextOnHoverDirective implements AfterViewInit, OnDestroy {

  speedInMiliseconds = input<number>(30);
  scrambleFrames = input<number>(8);
  
  private originalText = signal<string>('');
  private resolved: boolean[] = [];
  private frameCounters: number[] = [];
  private intervalId?: any;
  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef<HTMLElement>);

  private readonly RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Salva o texto original uma única vez
    const content = this.el.nativeElement.innerText.trim();
    this.originalText.set(content);
    
    this.el.nativeElement.classList.add("scrambling-text");
  }

  // Escuta o evento de passar o mouse
  @HostListener('mouseenter')
  onMouseEnter() {
    this.resetAndStart();
  }

  private resetAndStart() {
    // 1. Para qualquer animação que esteja rodando
    if (this.intervalId) clearInterval(this.intervalId);

    // 2. Reseta os estados para o tamanho do texto atual
    const textLength = this.originalText().length;
    this.resolved = Array(textLength).fill(false);
    this.frameCounters = Array(textLength).fill(0);

    // 3. Inicia a animação
    this.startScrumbling();
  }

  private startScrumbling(): void {
    this.intervalId = window.setInterval(() => {
      let allResolved = true;
      let output = '';
      const text = this.originalText();

      for (let i = 0; i < text.length; i++) {
        if (this.resolved[i] || text[i] === ' ') {
          output += text[i];
          this.resolved[i] = true;
        } else {
          allResolved = false;
          if (this.frameCounters[i] >= this.scrambleFrames()) {
            this.resolved[i] = true;
            output += text[i];
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
    }, this.speedInMiliseconds());
  }

  private randomChar(): string {
    return this.RANDOM_CHARS[Math.floor(Math.random() * this.RANDOM_CHARS.length)];
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

}
