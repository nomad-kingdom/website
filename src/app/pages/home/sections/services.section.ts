import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { ScrollerComponent } from "@shared/components/scroller.component";
import { InheritParentDimentions } from "@shared/directives/inherit-parent-dimentions";
import { RouterLink } from "@angular/router";
import { ScreenService } from '@core/services/screen.service';

@Component({
  selector: 'kingdom-services',
  imports: [ScrollerComponent, InheritParentDimentions, RouterLink],
  template: `
    <div class="limited-container">
      <div class="services-content-wrapper bg-(--secondary) py-24 2xl:py-32 px-6 lg:px-10 xl-1230:px-28! flex flex-col gap-10">
        <div class="w-full flex gap-10 justify-center lg:justify-start">
          <h1 class="tag text-(--primary) px-5 w-fit">Nossos Serviços_</h1>
        </div>
        <div class="services-content flex flex-col gap-16 justify-start items-start">
          <div class="head">
            <h1 class="text-white font-['ibm-sans']! font-bold text-[2.688rem] mb-5">O que fazemos?</h1>
            <div class=" flex justify-between items-center">
              <p class="text-white">Proporcionar serviços profissionais de segurança ofensiva.</p>
              <div class="scroller-controllers"></div>
            </div>
          </div>

          @if(screenService.width$() < 1024){
            <div class="services-mobile w-full">
              <q-scroller [itemsArray]="services()" (active)="this.activeMobile.set($event)" [alignment]="'start'" [changeOnTouch]="true" [isLoading]="false">
                <ng-template #item let-item>
                  <div id="card" class="card w-77 md:w-85 relative my-2 p-10">
                    <div class="card-content h-full relative z-2 flex gap-7 flex-col justify-between">
                      <div class="icon">
                        <svg width="67" height="78" viewBox="0 0 67 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_406_45)">
                        <path d="M32.6151 0.0598174C33.1451 -0.00202483 33.6708 -0.0219027 34.2031 0.0333136C42.5164 3.07242 50.8055 6.46932 58.9333 10.0208C64.614 12.5034 65.7779 13.1063 66.5222 19.624C69.0821 42.0131 61.3165 65.4027 39.8197 75.2113C34.4195 77.6762 32.5378 77.6762 27.1354 75.2113C6.74734 65.9085 -0.852624 45.1207 0.0750091 23.7299C0.176607 21.3998 0.512322 16.8853 1.42891 14.8335C2.59066 12.2295 4.47022 11.5846 6.86661 10.5178C13.9961 7.34174 21.7485 4.07956 29.0194 1.25911C30.1414 0.82401 31.4224 0.198962 32.6151 0.0598174ZM32.7763 2.70136C32.2153 2.78087 31.694 3.05254 31.1684 3.24248C22.7623 6.27938 14.5107 10.6127 6.08475 13.7049C3.54701 14.9969 3.38357 17.0377 3.07656 19.624C0.49907 41.4102 8.2691 64.855 29.8432 73.4952C32.9883 74.7542 33.9645 74.7542 37.1074 73.4952C57.5242 65.3188 65.1352 44.6966 64.2319 23.8956C64.1192 21.2805 63.9558 15.9069 61.7979 14.2592C53.436 10.7475 45.0917 6.8205 36.6083 3.57157C35.2632 3.05696 34.2958 2.48271 32.7719 2.70136H32.7763Z" fill="#E51021"/>
                        <path d="M33.1054 5.83498C33.8828 5.68921 34.8679 6.25904 35.621 6.54837C43.8129 9.68907 51.7994 13.4835 59.9228 16.8009C60.179 16.9732 60.2983 17.2095 60.3844 17.4967C60.804 18.8793 61.0249 22.1944 61.0934 23.7317C61.9481 42.6708 55.6954 61.7492 37.3923 69.9764C33.6067 71.6793 33.2202 71.6417 29.45 69.9234C11.1624 61.5835 4.96494 42.5692 5.87049 23.5726C5.94338 22.0398 6.1289 19.9748 6.38731 18.4685C6.74732 16.3791 7.42096 16.5977 9.18126 15.8048C17.0485 12.2621 25.2227 9.34673 33.1076 5.83277L33.1054 5.83498ZM57.924 18.718L33.4057 8.61567L9.03328 18.718C6.77604 36.7229 10.9592 56.793 27.9128 66.1709C28.9973 66.7716 32.0408 68.3862 33.1076 68.5871C33.896 68.7351 35.2853 68.0041 36.0716 67.6595C55.2139 59.2622 60.4043 37.9465 57.9262 18.718H57.924Z" fill="#E51021"/>
                        <path d="M32.2834 19.8974C37.2419 19.332 41.8182 22.5743 42.8253 27.451C43.2074 29.3018 43.0108 31.093 43.0948 32.9682C44.4597 34.0283 45.6899 35.433 45.9704 37.2022C46.3658 39.7156 46.2796 46.5492 46.0499 49.2018C45.807 52.0134 43.6823 54.2927 40.9281 54.825C36.3606 54.5202 30.4525 55.5207 26.033 54.825C23.5968 54.4407 21.3749 52.2188 20.9906 49.7826C20.6173 47.4061 20.6505 39.9321 20.9332 37.476C21.1474 35.6097 22.4262 34.0703 23.8641 32.9682C23.1418 27.0424 25.7414 20.6439 32.2856 19.8974H32.2834ZM40.4201 32.0847V28.6944C40.4201 25.7591 37.18 22.8437 34.3684 22.5124C30.8566 22.0994 26.5343 24.9817 26.5343 28.6944V32.0847H40.4223H40.4201ZM26.6602 34.7749C25.0192 35.0421 23.9104 36.1906 23.5725 37.8051C23.8111 41.3964 23.2015 45.5023 23.5593 49.0317C23.7448 50.8715 25.1164 52.0995 26.9385 52.2652C31.1394 52.6473 35.91 51.9648 40.1727 52.2585C42.176 51.9272 43.2516 50.7235 43.4018 48.7092C43.6028 46.0323 43.6867 40.5527 43.3952 37.9553C43.1942 36.1729 41.7519 34.9096 40.0027 34.7329C35.8151 34.3132 30.9163 35.0068 26.6558 34.7749H26.6602Z" fill="#E51021"/>
                        <path d="M34.835 44.8487C34.6649 45.9972 35.3739 49.1755 33.4215 49.065C31.5574 48.959 32.3238 46.0568 32.1228 44.8487C27.626 42.8609 30.389 36.2747 34.8659 38.0571C37.9602 39.2895 37.8454 43.5677 34.8372 44.8487H34.835ZM33.4215 40.4027C31.9814 40.4778 32.1714 42.9404 34.0311 42.3066C34.729 42.0702 34.6738 40.3364 33.4215 40.4027Z" fill="#E51021"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_406_45">
                        <rect width="66.9928" height="77.062" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                      </div>
                      <div class="details text-white">
                        <h2 class="name mb-3 text-(--primary) font-['ibm-sans']! font-medium text-2xl line-clamp-2">{{ item.name }}</h2>
                        <p class="description line-clamp-4 text-sm">{{ item.description }}</p>
                      </div>
                      <div class="w-full">
                        <a [routerLink]="['']" class="cta text-white block relative w-full p-5">
                          <p class="relative z-2 text-center w-full">Saiba mais</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </ng-template>
  
                <ng-template #controllers let-onClick="onClick" let-next="onNext" let-prev="onPrev">
                  <div class="controllers-container mt-7 flex gap-4 justify-between flex-wrap-reverse items-center">
                    <div class="square-pointers flex flex-wrap gap-3 justify-center items-center">
                      @for (item of services(); track $index) {
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
            <div class="services-desktop w-full">
              <q-scroller [itemsArray]="groups()" (active)="this.activeDesktop.set($event)" [changeOnTouch]="false" [gap]="20" [isLoading]="false">
                <ng-template #item let-item>
                  <div class="card-container w-full flex gap-4" appInheritParentDimentions [justifyContent]="'space-around'" [alignItems]="'stretch'" [translateY]="false" [fitHeigth]="true">
                    @for (service of item; track $index) {
                      <div id="card" class="card w-95 relative my-3 p-10 hover:drop-shadow-[0_0_7px_var(--primary)]">
                        <div class="card-content h-full relative z-2 flex gap-7 flex-col justify-between">
                          <div class="icon">
                            <svg width="67" height="78" viewBox="0 0 67 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_406_45)">
                            <path d="M32.6151 0.0598174C33.1451 -0.00202483 33.6708 -0.0219027 34.2031 0.0333136C42.5164 3.07242 50.8055 6.46932 58.9333 10.0208C64.614 12.5034 65.7779 13.1063 66.5222 19.624C69.0821 42.0131 61.3165 65.4027 39.8197 75.2113C34.4195 77.6762 32.5378 77.6762 27.1354 75.2113C6.74734 65.9085 -0.852624 45.1207 0.0750091 23.7299C0.176607 21.3998 0.512322 16.8853 1.42891 14.8335C2.59066 12.2295 4.47022 11.5846 6.86661 10.5178C13.9961 7.34174 21.7485 4.07956 29.0194 1.25911C30.1414 0.82401 31.4224 0.198962 32.6151 0.0598174ZM32.7763 2.70136C32.2153 2.78087 31.694 3.05254 31.1684 3.24248C22.7623 6.27938 14.5107 10.6127 6.08475 13.7049C3.54701 14.9969 3.38357 17.0377 3.07656 19.624C0.49907 41.4102 8.2691 64.855 29.8432 73.4952C32.9883 74.7542 33.9645 74.7542 37.1074 73.4952C57.5242 65.3188 65.1352 44.6966 64.2319 23.8956C64.1192 21.2805 63.9558 15.9069 61.7979 14.2592C53.436 10.7475 45.0917 6.8205 36.6083 3.57157C35.2632 3.05696 34.2958 2.48271 32.7719 2.70136H32.7763Z" fill="#E51021"/>
                            <path d="M33.1054 5.83498C33.8828 5.68921 34.8679 6.25904 35.621 6.54837C43.8129 9.68907 51.7994 13.4835 59.9228 16.8009C60.179 16.9732 60.2983 17.2095 60.3844 17.4967C60.804 18.8793 61.0249 22.1944 61.0934 23.7317C61.9481 42.6708 55.6954 61.7492 37.3923 69.9764C33.6067 71.6793 33.2202 71.6417 29.45 69.9234C11.1624 61.5835 4.96494 42.5692 5.87049 23.5726C5.94338 22.0398 6.1289 19.9748 6.38731 18.4685C6.74732 16.3791 7.42096 16.5977 9.18126 15.8048C17.0485 12.2621 25.2227 9.34673 33.1076 5.83277L33.1054 5.83498ZM57.924 18.718L33.4057 8.61567L9.03328 18.718C6.77604 36.7229 10.9592 56.793 27.9128 66.1709C28.9973 66.7716 32.0408 68.3862 33.1076 68.5871C33.896 68.7351 35.2853 68.0041 36.0716 67.6595C55.2139 59.2622 60.4043 37.9465 57.9262 18.718H57.924Z" fill="#E51021"/>
                            <path d="M32.2834 19.8974C37.2419 19.332 41.8182 22.5743 42.8253 27.451C43.2074 29.3018 43.0108 31.093 43.0948 32.9682C44.4597 34.0283 45.6899 35.433 45.9704 37.2022C46.3658 39.7156 46.2796 46.5492 46.0499 49.2018C45.807 52.0134 43.6823 54.2927 40.9281 54.825C36.3606 54.5202 30.4525 55.5207 26.033 54.825C23.5968 54.4407 21.3749 52.2188 20.9906 49.7826C20.6173 47.4061 20.6505 39.9321 20.9332 37.476C21.1474 35.6097 22.4262 34.0703 23.8641 32.9682C23.1418 27.0424 25.7414 20.6439 32.2856 19.8974H32.2834ZM40.4201 32.0847V28.6944C40.4201 25.7591 37.18 22.8437 34.3684 22.5124C30.8566 22.0994 26.5343 24.9817 26.5343 28.6944V32.0847H40.4223H40.4201ZM26.6602 34.7749C25.0192 35.0421 23.9104 36.1906 23.5725 37.8051C23.8111 41.3964 23.2015 45.5023 23.5593 49.0317C23.7448 50.8715 25.1164 52.0995 26.9385 52.2652C31.1394 52.6473 35.91 51.9648 40.1727 52.2585C42.176 51.9272 43.2516 50.7235 43.4018 48.7092C43.6028 46.0323 43.6867 40.5527 43.3952 37.9553C43.1942 36.1729 41.7519 34.9096 40.0027 34.7329C35.8151 34.3132 30.9163 35.0068 26.6558 34.7749H26.6602Z" fill="#E51021"/>
                            <path d="M34.835 44.8487C34.6649 45.9972 35.3739 49.1755 33.4215 49.065C31.5574 48.959 32.3238 46.0568 32.1228 44.8487C27.626 42.8609 30.389 36.2747 34.8659 38.0571C37.9602 39.2895 37.8454 43.5677 34.8372 44.8487H34.835ZM33.4215 40.4027C31.9814 40.4778 32.1714 42.9404 34.0311 42.3066C34.729 42.0702 34.6738 40.3364 33.4215 40.4027Z" fill="#E51021"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_406_45">
                            <rect width="66.9928" height="77.062" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                          </div>
                          <div class="details text-white">
                            <h2 class="name mb-3 text-(--primary) font-['ibm-sans']! font-medium text-2xl line-clamp-2">{{ service.name }}</h2>
                            <p class="description line-clamp-4 text-sm">{{ service.description }}</p>
                          </div>
                          <div class="w-full">
                            <a [routerLink]="['']" class="cta text-white block relative w-full p-5">
                              <p class="relative z-2 text-center w-full">Saiba mais</p>
                            </a>
                          </div>
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
  
  .services-content-wrapper{
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

  .cta{
    &::before{
      content: '';
      position: absolute;
      z-index: 0;
      inset: 0;
      background: white;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        calc(100% - 90%) 100%,
        0% calc(100% - 30px)
      );
    }

    &::after{
      content: "";
      position: absolute;
      background: black;
      z-index: 0;
      inset: 2px;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        calc(100% - 90%) 100%,
        0% calc(100% - 30px)
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
export class ServicesSection {
  services = signal([
    {
      name: 'Serviço 1',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Serviço 1',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Serviço 1',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Serviço 1',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Serviço 1',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    },
    {
      name: 'Serviço 1',
      description: 'É um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado'
    }
  ]);
  activeDesktop = signal<number>(0);
  activeMobile = signal<number>(0);

  screenService = inject(ScreenService);

  groups = computed(() => {
    const items = this.services();
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
