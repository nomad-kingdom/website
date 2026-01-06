import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, ElementRef, input, TemplateRef, viewChild } from '@angular/core';
import { Scroller } from '@core/abstracts/scroller.abstract.class';

@Component({
  selector: 'q-scroller',
  imports: [NgTemplateOutlet],
  template: `
    <div class="scroller-container overflow-hidden relative" #scrollerElementRef>
      @if(!isLoading()){
        <div class="items-container flex justify-start items-stretch"
        [style.width]="itemsArray().length > 0 ? 'fit-content' : '100%'"
        [style.gap.px]="gap()"
        >
          @for (item of itemsArray(); track $index) {
            <ng-container *ngTemplateOutlet="itemTemplate(); context: { $implicit: item, $index: $index, onClick: clickContext.scrollTo }"></ng-container>
          } @empty {
            <ng-content select="[onEmpty]">
              No data to display
            </ng-content>
          }
        </div>
      } @else {
        A carregar...
      }
    </div>

    <ng-container *ngTemplateOutlet="controllersTemplate(); context: { $implicit: {}, onClick: clickContext.scrollTo, onNext: clickContext.next, onPrev: clickContext.prev} "></ng-container>
  `,
  styles: `
    :host *{
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
    }
  `
})
export class ScrollerComponent extends Scroller {
  itemTemplate = contentChild<TemplateRef<any>>('item');
  controllersTemplate = contentChild<TemplateRef<any>>('controllers');

  scrollerContainer = viewChild<ElementRef<HTMLElement>>('scrollerElementRef');
  isLoading = input.required<boolean>();
  gap = input<number>(10);

  get clickContext(){
    return {
      scrollTo: (index: number) => this.scrollToActiveIndex(index),
      next: () => this.next(),
      prev: () => this.prev()
    }
  }

  protected override bootstrap(): void {
    this.scrollerElementRef = this.scrollerContainer()!;
    this.scrollerElementRef.nativeElement.addEventListener('touchmove', (e) => this.carouselTouchMoveEventHandler(e), { passive: true });
    this.scrollerElementRef.nativeElement.addEventListener('wheel', (e) => this.carouselWheelEventHandler(e), { passive: false });
    this.scrollerElementRef.nativeElement.addEventListener('touchstart', (e) => this.captureInitialXOnTouchStart(e), { passive: false });
  }
}
