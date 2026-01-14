import { Component, signal } from '@angular/core';
import { ScrambleTextDirective } from "@shared/directives/scramble-text.directive";
import { TypingText } from "@shared/directives/typing-text.directive";
import { ScrambleTextOnHoverDirective } from "@shared/directives/scramble-text-on-hover.directive";

@Component({
  selector: 'kingdom-certifications',
  imports: [ScrambleTextDirective, TypingText, ScrambleTextOnHoverDirective],
  template: `
    <div class="limited-container">
      <div class="certifications-content-wrapper bg-white py-24 2xl:py-32 px-6 lg:px-10 xl-1230:px-28! flex flex-col gap-10">
        <div class="w-full flex gap-10 justify-center lg:justify-start">
          <h1 class="tag text-(--primary) px-5 w-fit" kingdomScrambleText>Certificações</h1>
        </div>
        <div class="certifications-content flex flex-col gap-16 justify-start items-start">
          <div class="head">
            <h1 class="text-(--secondary) font-['ibm-sans']! font-bold text-[2.688rem] mb-5" kingdomTypingText>Nossas certificações</h1>
            <div class=" flex justify-between items-center">
              <p class="text-(--secondary)" kingdomScrambleText>Proporcionar serviços profissionais de segurança ofensiva.</p>
            </div>
          </div>

          <div class="certifications flex flex-col gap-12 w-full">
            <div class="tabs-container p-2.5 overflow-x-auto bg-[#FFECF0] w-full">
              <div class="items-container w-max flex gap-x-12">
                <button class="item active uppercase bg-(--primary) font-bold text-white cursor-pointer px-12 relative overflow-hidden py-4" kingdomScrambleTextOnHover>CISCO</button>
                <button class="item text-(--secondary) cursor-pointer px-0 relative overflow-hidden py-4" kingdomScrambleTextOnHover>Altered Security</button>
                <button class="item text-(--secondary) cursor-pointer px-0 relative overflow-hidden py-4" kingdomScrambleTextOnHover>DESEC Security</button>
                <button class="item text-(--secondary) cursor-pointer px-0 relative overflow-hidden py-4" kingdomScrambleTextOnHover>CrowSec</button>
                <button class="item text-(--secondary) cursor-pointer px-0 relative overflow-hidden py-4" kingdomScrambleTextOnHover>HackTheBox</button>
              </div>
            </div>

            <div class="images-containers flex flex-wrap gap-4 justify-center lg:justify-start items-center">
              @for (item of certifications(); track $index) {
                <div class="partner max-w-35 b-[#F2F2F2] p-0">
                  <img src="{{ item.logo }}" class="w-full h-full hover:scale-[1.1] duration-75 cursor-pointer object-contain" alt="">
                </div>
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: `
    .certifications-content-wrapper{
      clip-path: polygon(
        80px 0px,
        100% 0px,
        100% calc(100% - 80px),
        calc(100% - 80px) 100%,
        0px 100%,
        0px 80px
      );
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
    .items-container button:not(.active){
      &::before{
        content: '';
        position: absolute;
        left: -100%;
        z-index: 0;
        bottom: 0;
        width: 100%;
        height: 5%;
        transition: left .4s;
        background-color: var(--primary);
      }

      &:hover::before{
        left: 0%;
      }
    }
    
  `,
})
export class CertificationsSection {
  certifications = signal([
    {
      logo: '/images/ccna.jpg',
      name: 'ipsum'
    },
    {
      logo: '/images/ccna.jpg',
      name: 'ipsum'
    },
    {
      logo: '/images/ccna.jpg',
      name: 'ipsum'
    },
    {
      logo: '/images/ccna.jpg',
      name: 'ipsum'
    },
    {
      logo: '/images/ccna.jpg',
      name: 'ipsum'
    }
  ]);
}
