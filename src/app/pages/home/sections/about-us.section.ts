import { Component } from '@angular/core';

@Component({
  selector: 'kingdom-about-us',
  imports: [],
  template: `
    <div class="limited-container">
      <div class="about-us-content-wrapper bg-(--secondary) py-16 px-6 lg:px-20 xl-1230:px-28 flex flex-col gap-10">
        <div class="w-full flex gap-10 justify-center lg:justify-start">
          <h1 class="tag text-(--primary) px-5 w-fit">Sobre Nós_</h1>
        </div>
        <div class="about-us-content flex flex-col lg:flex-row gap-16 justify-center lg:justify-between items-center lg:items-center">
          <div class="brand lg:min-w-91">
            <img src="/static/lg-brand.svg" class="w-full h-full" alt="">
          </div>
          <div class="cnt flex flex-col gap-8 lg:max-w-105 xl-1230:max-w-175!">
            <h1 class="text-white font-['ibm-sans']! w-fit font-bold text-[2.688rem] glitched-text" data-text="Quem Somos?">Quem somos?</h1>
            <p class="text-white">
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
  .about-us-content-wrapper{
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
export class AboutUsSection {

}
