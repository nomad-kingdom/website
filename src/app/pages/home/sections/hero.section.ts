import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TypingText } from "@shared/directives/typing-text.directive";
import { ScrambleTextDirective } from "@shared/directives/scramble-text.directive";

@Component({
  selector: 'kingdom-hero',
  imports: [RouterLink, TypingText, ScrambleTextDirective],
  template: `
    <div class="section-content relative h-[calc(100svh+100px)] bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-position-[right_-100px_bottom] lg:bg-bottom">
      <div class="limited-container h-full flex justify-center items-center px-4 lg:px-0">
        <main class="flex flex-col gap-6 mt-10 xl-1230:max-w-[90%]">
          <h1 class="uppercase md:max-w-[70%] lg:max-w-[55%] font-['ibm-sans']! font-bold text-white text-5xl lg:text-7xl">
            Breaking <span data-text="systems" class="text-(--primary) font-['ibm-sans']! glitched-text">systems</span> to build stronger <span data-text="ones" class="text-(--primary) font-['ibm-sans']! glitched-text">ones.</span>
          </h1>
          <p class="text-white md:max-w-[50%] lg:max-w-84 capitalize" kingdomTypingText>
            Proporcionar serviços profissionais de segurança ofensiva
          </p>
          <a [routerLink]="['']" class="cta bg-(--primary) text-white hover:bg-white uppercae font-bol rounded-md hover:text-(--primary) duration-300 p-5 flex w-fit justify-center items-center" kingdomScrambleText>
            Contacte a nossa equipa
          </a>
        </main>
      </div>
    </div>
  `,
  styles: `
    .cta{
      /* clip-path: polygon(
        10% 0%,
        100% 0%,
        100% 65%,
        90% 100%,
        0% 100%,
        0% 35%
      ); */
    }
  `,
})
export class HeroSection {

}
