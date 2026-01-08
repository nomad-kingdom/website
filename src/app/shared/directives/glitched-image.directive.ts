import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostListener, inject, input, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[kingdomGlitchedImage]',
})
export class GlitchedImageDirective implements AfterViewInit {
  image = input.required<string>();
  layers = input<number>(3);

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const host = this.el.nativeElement;
    const imageUrl = `url('${this.image()}')`;

    // 1. Estiliza o Host
    this.renderer.addClass(host, 'c-glitch');
    this.renderer.setStyle(host, 'background-image', imageUrl);

    // 2. Cria as camadas
    for (let i = 0; i < this.layers(); i++) {
      const subDiv = this.renderer.createElement('div');
      this.renderer.addClass(subDiv, 'sub-c-glitch');
      this.renderer.setStyle(subDiv, 'background-image', imageUrl);
      // Adiciona uma classe específica para cada camada para facilitar o CSS
      this.renderer.addClass(subDiv, `layer-${i + 1}`);

      // OPCIONAL: Se quiser que o glitch "vaze" as bordas como o original
      this.renderer.setStyle(subDiv, 'height', 'calc(100% + 10px)');
      this.renderer.setStyle(subDiv, 'width', 'calc(100% + 20px)');
      this.renderer.setStyle(subDiv, 'top', '-5px');
      this.renderer.setStyle(subDiv, 'left', '-10px');

      this.renderer.appendChild(host, subDiv);
    }
  }

  // 3. Controla a ativação por classes em vez de apenas CSS Hover
  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'is-glitching');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'is-glitching');
  }
}