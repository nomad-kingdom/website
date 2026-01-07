import { Component, signal } from '@angular/core';

@Component({
  selector: 'kingdom-partners',
  imports: [],
  template: `
    <div class="section-container py-12.5 md:py-25 bg-[url('/images/pattern.png')] bg-repeat-space bg-cover bg-center">
      <div class="limited-container">
        <div class="partners-content-wrapper flex flex-col items-center justify-center gap-6">
          <div class="head w-full flex gap-10 justify-center lg:justify-start">
            <h1 h1 class="tag text-(--primary) px-5 w-fit">Parceiros / Clientes</h1>
          </div>

          <div class="images-containers flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            @for (item of partners(); track $index) {
              <div class="partner max-w-41.5 b-[#F2F2F2] p-5">
                <img src="{{ item.logo }}" class="w-full h-full object-contain" alt="">
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
  /* .partners-content-wrapper{
    clip-path: polygon(
      80px 0px,
      100% 0px,
      100% calc(100% - 80px),
      calc(100% - 80px) 100%,
      0px 100%,
      0px 80px
    );
  } */

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
    <path d='M9.86028 33.0833H1V1H9.86028' stroke='rgb(229,16,33)' fill='transparent' stroke-width='2'/>\
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
    <path d='M0 1H8.86V33.083H0' stroke='rgb(229,16,33)' stroke-width='2' fill='none'/>\
    </svg>");
    }
  }
  `,
})
export class PartnersSection {
  partners = signal([
    {
      logo: '/images/logo-1.png',
      name: 'ipsum'
    },
    {
      logo: '/images/logo-2.png',
      name: 'ipsum'
    },
    {
      logo: '/images/logo-3.png',
      name: 'ipsum'
    },
    {
      logo: '/images/logo-4.png',
      name: 'ipsum'
    },
    {
      logo: '/images/logo-5.png',
      name: 'ipsum'
    },
    {
      logo: '/images/logo-6.png',
      name: 'ipsum'
    },
    {
      logo: '/images/logo-7.png',
      name: 'ipsum'
    },
    {
      logo: '/images/logo-8.png',
      name: 'ipsum'
    },
  ]);
}
