import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TypingText } from "@shared/directives/typing-text.directive";
import { ScrambleTextDirective } from "@shared/directives/scramble-text.directive";

@Component({
  selector: 'kingdom-statement',
  imports: [RouterLink, TypingText, ScrambleTextDirective],
  template: `
    <div class="section-container py-12.5 md:py-25 bg-[url('/images/pattern.png')] bg-repeat-space bg-cover bg-center">
      <div class="limited-container">
        <div class="statement-content-wrapper py-15 bg-(--primary) flex flex-col items-center justify-center gap-6">
          <h3 class=" text-2xl md:text-3xl text-white">Nomad Kingdom</h3>
          <h1 class="uppercase text-3xl md:text-4xl text-white font-bold max-w-137 text-center" kingdomTypingText>Está Liderando o futuro da cibersegurança</h1>
          <a [routerLink]="['']" class="cta bg-white block text-(--primary) rounded-md w-fit py-5 px-16">
            <p class="relative z-2 text-center w-full" kingdomScrambleText>Saiba mais</p>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: `
  .statement-content-wrapper{
    clip-path: polygon(
      80px 0px,
      100% 0px,
      100% calc(100% - 80px),
      calc(100% - 80px) 100%,
      0px 100%,
      0px 80px
    );
  }
  `,
})
export class StatementSection {

}
