import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostListener, inject, input, OnChanges, PLATFORM_ID, signal, SimpleChanges } from '@angular/core';
import { ScreenService } from '@core/services/screen.service';

@Directive({
  selector: '[appInheritParentDimentions]'
})
export class InheritParentDimentions implements AfterViewInit, OnChanges {

  private windowWidth = signal(0);
  private platformId = inject(PLATFORM_ID);
  translateY = input<boolean>(true);
  fitHeigth = input<boolean>(true);
  private screenService = inject(ScreenService);
  maximizeChildWidth = input<boolean>(true);
  justifyContent = input<string>('center');
  alignItems = input<string>('center');

  constructor(private element: ElementRef<HTMLElement>) {
    // if(isPlatformBrowser(this.platformId)){
    //   this.screenWidth(window.innerWidth);
    // } else {
    //   this.screenWidth(320);
    // }
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.screenWidth(window.innerWidth);
    } else {
      this.screenWidth(320);
    }
    this.setup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  setup(): void {
    const scrollerContainerElementRef = this.element.nativeElement.parentElement?.parentElement as HTMLElement;
    this.changeDimentions(scrollerContainerElementRef?.clientWidth, scrollerContainerElementRef?.clientHeight)
  }

  private changeDimentions(width: number, heigth: number): void {
    this.element.nativeElement.style.width = `${ width }px`;
    if(this.fitHeigth()){
      this.element.nativeElement.style.height = `${ heigth }px`;
    }
    this.element.nativeElement.style.display = `flex`;
    this.element.nativeElement.style.flexDirection = `row`;
    this.element.nativeElement.style.justifyContent = this.justifyContent();
    this.element.nativeElement.style.alignItems = this.alignItems();

    if(!this.maximizeChildWidth()) return;
    this.maxmizeChildrenWidth(width, heigth);
  }

  private maxmizeChildrenWidth(width: number, height: number): void {
    const child = this.element.nativeElement.childNodes as NodeListOf<HTMLElement>;

    const childWidth = width - (width * 0.4);
    child.forEach(element => {
      if(!element.style) return;
      const incremental = this.incrementalValue(this.windowWidth());
      element.style.maxWidth = `${ childWidth + incremental }px`;
      if(this.translateY()){
        element.style.transform = `translateY(40px)`;

      } else {
        element.style.transform = `translateY(0)`;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth((event.target as Window).innerWidth);
    this.setup()
  }

  private screenWidth(width: number) {
    this.windowWidth.set(width);
  }

  private incrementalValue(value: number): number{
    if(value <= 1024){
      return 200;
    }

    if(value <= 1280){
      return 100;
    }

    if(value >= 1440){
      return 100;
    }

    return 0;
  }

}
