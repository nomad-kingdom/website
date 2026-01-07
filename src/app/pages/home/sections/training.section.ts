import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { ScreenService } from '@core/services/screen.service';
import { ScrollerComponent } from "@shared/components/scroller.component";
import { RouterLink } from "@angular/router";
import { InheritParentDimentions } from "@shared/directives/inherit-parent-dimentions";
import { TypingText } from "@shared/directives/typing-text.directive";
import { ScrambleTextDirective } from "@shared/directives/scramble-text.directive";

@Component({
  selector: 'kingdom-training',
  imports: [ScrollerComponent, RouterLink, InheritParentDimentions, TypingText, ScrambleTextDirective],
  template: `
    <div class="limited-container">
      <div class="trainings-content-wrapper bg-(--secondary) py-24 2xl:py-32 px-6 lg:px-10 xl-1230:px-28! flex flex-col gap-10">
        <div class="w-full flex gap-10 justify-center lg:justify-start">
          <h1 class="tag text-(--primary) px-5 w-fit" kingdomScrambleText>Nossos treinamentos_</h1>
        </div>
        <div class="trainings-content flex flex-col gap-16 justify-start items-start">
          <div class="head">
            <h1 class="text-white font-['ibm-sans']! font-bold text-[2.688rem] mb-5" kingdomTypingText>Formações que oferecemos</h1>
            <div class=" flex justify-between items-center">
              <p class="text-white" kingdomScrambleText>Proporcionar serviços profissionais de segurança ofensiva.</p>
            </div>
          </div>

          @if(screenService.width$() < 1024){
            <div class="trainings-mobile w-full">
              <q-scroller [itemsArray]="trainings()" (active)="this.activeMobile.set($event)" [alignment]="'start'" [changeOnTouch]="true" [isLoading]="false">
                <ng-template #item let-item>
                  <div id="card" class="card w-77 md:w-85 relative my-3 p-10 hover:drop-shadow-[0_0_7px_var(--primary)]">
                    <div class="card-content h-full relative z-2 flex gap-7 flex-col justify-between">
                      <div class="image w-full h-71.5">
                        <img src="{{ item.image }}" class="w-full h-full object-cover object-center" alt="">
                      </div>
                      <div class="details text-white">
                        <h2 class="name mb-3 text-(--primary) font-['ibm-sans']! font-medium text-2xl line-clamp-2" kingdomTypingText>{{ item.name }}</h2>
                      </div>
                      <!-- <div class="w-full">
                        <a [routerLink]="['']" class="cta text-white block relative border border-white rounded-md w-full p-5">
                          <p class="relative z-2 text-center w-full">Saiba mais</p>
                        </a>
                      </div> -->
                    </div>
                  </div>
                </ng-template>
  
                <ng-template #controllers let-onClick="onClick" let-next="onNext" let-prev="onPrev">
                  <div class="controllers-container mt-7 flex gap-4 justify-between flex-wrap-reverse items-center">
                    <div class="square-pointers flex flex-wrap gap-3 justify-center items-center">
                      @for (item of trainings(); track $index) {
                        <button (click)="onClick($index)" class="square w-4 md:w-6.25 h-3.5 duration-500 bg-white/10 cursor-pointer" [class]="{
                          'bg-(--primary)!': $index === this.activeMobile()
                        }"></button>
                      }
                    </div>
                    <div class="arrow-pointers">
                      <div class="buttons tag flex gap-7 justify-between items-center px-2">
                        <button (click)="prev()" class="prev p-2">
                          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.41406 1.41406L1.41406 9.41406L9.41406 17.4141" stroke="#E51021" stroke-width="2" stroke-linecap="square"/>
                          </svg>
                        </button>
                        <button (click)="next()" class="next p-2">
                          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.41406 17.4141L9.41406 9.41406L1.41406 1.41406" stroke="#E51021" stroke-width="2" stroke-linecap="square"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </ng-template>
              </q-scroller>
            </div>
          } @else {
            <div class="trainings-desktop w-full">
              <q-scroller [itemsArray]="groups()" (active)="this.activeDesktop.set($event)" [changeOnTouch]="false" [gap]="20" [isLoading]="false">
                <ng-template #item let-item>
                  <div class="card-container w-full flex gap-4" appInheritParentDimentions [justifyContent]="'space-around'" [alignItems]="'stretch'" [translateY]="false" [fitHeigth]="true">
                    @for (training of item; track $index) {
                      <div id="card" class="card w-95 relative my-3 p-10 hover:drop-shadow-[0_0_7px_var(--primary)]">
                        <div class="card-content h-full relative z-2 flex gap-7 flex-col justify-between">
                          <div class="image w-full h-71.5">
                            <img src="{{ training.image }}" class="w-full h-full object-cover object-center" alt="">
                          </div>
                          <div class="details text-white">
                            <h2 class="name mb-3 text-(--primary) font-['ibm-sans']! font-medium text-2xl line-clamp-2" kingdomTypingText>{{ training.name }}</h2>
                          </div>
                          <!-- <div class="w-full">
                            <a [routerLink]="['']" class="cta text-white block relative border border-white rounded-md w-full p-5">
                              <p class="relative z-2 text-center w-full">Saiba mais</p>
                            </a>
                          </div> -->
                        </div>
                      </div>
                    }
                  </div>
                </ng-template>
  
                <ng-template #controllers let-onClick="onClick" let-next="onNext" let-prev="onPrev">
                  <div class="controllers-container mt-7 flex justify-between items-center">
                    <div class="square-pointers flex gap-3 justify-center items-center">
                      @for (item of groups(); track $index) {
                        <button (click)="onClick($index)" class="square w-6.25 h-3.5 duration-500 bg-white/10 cursor-pointer" [class]="{
                          'bg-(--primary)!': $index === this.activeDesktop()
                        }"></button>
                      }
                    </div>
                    <div class="arrow-pointers">
                      <div class="buttons tag flex gap-7 justify-between items-center px-2">
                        <button (click)="prev()" class="prev p-2">
                          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.41406 1.41406L1.41406 9.41406L9.41406 17.4141" stroke="#E51021" stroke-width="2" stroke-linecap="square"/>
                          </svg>
                        </button>
                        <button (click)="next()" class="next p-2">
                          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.41406 17.4141L9.41406 9.41406L1.41406 1.41406" stroke="#E51021" stroke-width="2" stroke-linecap="square"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </ng-template>
              </q-scroller>
            </div>
          }

        </div>
      </div>
    </div>
  `,
  styles: `
  .trainings-content-wrapper{
    clip-path: polygon(
      80px 0px,
      100% 0px,
      100% calc(100% - 80px),
      calc(100% - 80px) 100%,
      0px 100%,
      0px 80px
    );
  }

  #card{
    transition: filter 0.3s ease;
    &::before{
      content: '';
      position: absolute;
      inset: 0;
      background: #323232;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        calc(100% - 90%) 100%,
        0% calc(100% - 40px)
      );
    }
    &::after {
      content: "";
      position: absolute;
      background: black;
      inset: 1px;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        calc(100% - 90%) 100%,
        0% calc(100% - 40px)
      );
    }
  }

  .tag {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 35px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='35' viewBox='0 0 10 35'>\
    <path d='M9.86028 33.0833H1V1H9.86028' stroke='rgb(50,50,50)' fill='transparent' stroke-width='2'/>\
    </svg>");
    }
    
    &::after{
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 35px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url("data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='10' height='35' viewBox='0 0 10 35'>\
<path d='M0 1H8.86V33.083H0' stroke='%23323232' stroke-width='2' fill='none'/>\
</svg>");
    }
  }
  `,
})
export class TrainingSection {
trainings = signal([
    {
      name: 'Nome do curso 1',
      image: '/images/training.jpg',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Nome do curso 1',
      image: '/images/training.jpg',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Nome do curso 1',
      image: '/images/training.jpg',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Nome do curso 1',
      image: '/images/training.jpg',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Nome do curso 1',
      image: '/images/training.jpg',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Nome do curso 1',
      image: '/images/training.jpg',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    }
  ]);
  activeDesktop = signal<number>(0);
  activeMobile = signal<number>(0);

  screenService = inject(ScreenService);

  groups = computed(() => {
    const items = this.trainings();
    const result = [];

    for (let i = 0; i < items.length; i += 3) {
      result.push(items.slice(i, i + 3));
    }
    return result;
  });

  @HostListener('window:resize', [ '$event' ])
  onResize($event: Event) {
      this.screenService.setupWidth();
  }
}
