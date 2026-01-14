import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ScrambleTextOnHoverDirective } from "@shared/directives/scramble-text-on-hover.directive";

@Component({
  selector: 'kingdom-footer',
  imports: [RouterLink, ScrambleTextOnHoverDirective],
  template: `
  <footer class="footer-container">
    <div class="head-content bg-(--secondary)/90 py-12">
      <div class="limited-container">
        <div class="gototop mb-6 flex justify-center items-center md:justify-end">
          <button (click)="goup()" class="cursor-pointer capitalise text-(--primary) flex gap-3 justify-center items-center">
            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.07137 0.292892C7.68084 -0.0976314 7.04768 -0.0976315 6.65715 0.292892L0.29319 6.65685C-0.0973339 7.04738 -0.0973339 7.68054 0.29319 8.07107C0.683715 8.46159 1.31688 8.46159 1.7074 8.07107L7.36426 2.41421L13.0211 8.07107C13.4116 8.46159 14.0448 8.46159 14.4353 8.07107C14.8259 7.68054 14.8259 7.04738 14.4353 6.65685L8.07137 0.292892ZM7.36426 18L8.36426 18L8.36426 1L7.36426 1L6.36426 1L6.36426 18L7.36426 18Z" fill="#E51021"/>
            </svg>
            Voltar para cima
          </button>
        </div>
        <div class="details flex flex-col gap-12">
          <div class="company flex flex-col md:flex-row md:justify-start md:flex-wrap lg:flex-nowrap md:items-stretch gap-10 xl-1230:gap-0">
            <div class="brand md:w-[calc(100%/3)] lg:w-[calc(100%/4)]!">
              <img src="/static/vt-logo.svg" class="" alt="">
            </div>
            <div class="navigation md:w-[calc(100%/3)] lg:w-[calc(100%/4)]! flex flex-col gap-6 pt-7">
              <h3 class="text-white font-bold text-base">Navegação</h3>
              <nav class="">
                <ul class="flex md:flex-col gap-6 justify-start items-center md:items-start">
                  <li>
                    <a [routerLink]="['']" fragment="about-us" class="text-white text-sm hover:text-(--primary)" kingdomScrambleTextOnHover>Sobre nós</a>
                  </li>
                  <li>
                    <a [routerLink]="['']" fragment="services" class="text-white text-sm hover:text-(--primary)" kingdomScrambleTextOnHover>Serviços</a>
                  </li>
                  <li>
                    <a [routerLink]="['']" fragment="training" class="text-white text-sm hover:text-(--primary)" kingdomScrambleTextOnHover>Treinamentos</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="certifications lg:w-[calc(100%/4)] hidden lg:flex flex-col gap-6 md:w-100 pt-7">
              <!-- <h3 class="text-white font-bold text-base">Certificações</h3>
              <div class="emblems flex flex-wrap gap-5 md:gap-7.5">
                <div class="image">
                  <img src="/images/iso.svg" class="w-full h-full object-contain object-center" alt="">
                </div>
                <div class="image">
                  <img src="/images/iso.svg" class="w-full h-full object-contain object-center" alt="">
                </div>
              </div> -->
            </div>
            <div class="emptyt lg:w-[calc(100%/4)] hidden lg:block"></div>
          </div>
          <div class="contacts-container flex flex-col gap-6">
            <h3 class="text-white font-bold text-base pb-3.5 border-b border-[#323232]">
              <!-- Contactos -->
            </h3>
            <div class="contacts flex flex-col md:flex-row md:justify-start md:flex-wrap lg:flex-nowrap gap-10 xl-1230:gap-0">
              <div class=" md:w-[calc(100%/3)] lg:w-[calc(100%/4)] flex flex-col gap-6">
                <h3 class="text-white font-bold text-base">Redes sociais</h3>
                <div class="social-medias flex gap-5 items-center">
                  <a href="" class="instagram" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_375_2180)">
                    <path d="M15.5067 0C15.7678 0.0657554 16.0345 0.0986331 16.2962 0.167433C18.3149 0.695912 19.8326 2.54924 20 4.62784L19.9982 15.4105C19.7802 17.8246 17.8236 19.782 15.4086 20.0006L4.55544 19.9963C2.52519 19.8003 0.728092 18.3281 0.185067 16.3591C0.107144 16.0772 0.066965 15.7923 0 15.5091V4.49207C0.246553 2.22533 2.19158 0.201528 4.49152 0H15.506H15.5067ZM4.64006 1.69138C3.081 1.85881 1.84762 3.11851 1.68447 4.6729L1.68021 15.293C1.83545 16.9046 3.12726 18.1905 4.74416 18.3226L15.2911 18.3208C16.9044 18.1674 18.1871 16.8736 18.3204 15.2565L18.3186 4.70821C18.1664 3.10755 16.8934 1.83324 15.2918 1.68103L4.64067 1.69198L4.64006 1.69138Z" fill="#E51021"/>
                    <path d="M9.52257 5.01137C13.5557 4.67042 16.3573 8.94087 14.3416 12.4868C12.3016 16.0759 6.97729 15.7392 5.38353 11.94C4.08988 8.85685 6.18893 5.29266 9.52318 5.01076L9.52257 5.01137ZM9.64006 6.69118C7.24576 6.91645 5.93812 9.60329 7.12766 11.6807C8.37199 13.853 11.5954 13.8689 12.8574 11.7062C14.2509 9.31714 12.3795 6.43425 9.64006 6.69179V6.69118Z" fill="#E51021"/>
                    <path d="M15.3025 3.33074C16.9236 3.18218 17.1355 5.61818 15.6391 5.81727C13.8603 6.0535 13.6618 3.48113 15.3025 3.33074Z" fill="#E51021"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_375_2180">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </a>
                  <a href="" class="linkedin" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_375_2181)">
                    <path d="M0.00187477 1.97163L0 17.9884C0.111861 19.0395 0.956131 19.8838 2.01225 20L18.0252 19.9981C19.0132 19.8694 19.7863 19.1326 20 18.1177V1.88101C19.7963 0.916136 19.0776 0.19685 18.1196 0H1.87602C0.976753 0.113736 0.0868641 1.04987 0.00187477 1.97163ZM1.26922 2.19348V2.1866C1.31046 1.73041 1.6048 1.39295 2.05662 1.28359L2.07474 1.27922H2.09349L17.8065 1.26797H17.8134C18.3177 1.31359 18.6864 1.68229 18.7314 2.1866V2.20097L18.732 17.7622V17.7647C18.7139 18.2871 18.3358 18.6845 17.8134 18.7308H17.799L2.24097 18.7314H2.23535C1.71291 18.7133 1.31546 18.3352 1.26922 17.8128V17.7984V2.19348Z" fill="#E51021"/>
                    <path d="M14.0103 11.7947V11.8035L14.0091 16.4673H16.4281L16.3894 10.4968C16.3738 9.35067 15.8376 8.45141 14.8802 7.96709C13.7841 7.41216 12.3886 7.54027 11.3207 8.29393L10.477 9.27943V7.81774H8.09668V16.4673H10.477L10.4751 11.9172V11.9122C10.5689 10.4743 11.1575 9.75749 12.2755 9.72C13.7091 9.67188 13.9566 10.8036 14.0109 11.7947H14.0103Z" fill="#E51021"/>
                    <path d="M6.03245 7.81641H3.57275V16.466H6.03245V7.81641Z" fill="#E51021"/>
                    <path d="M4.86042 3.32617C4.78105 3.32617 4.69919 3.3318 4.61545 3.34242C3.65869 3.4649 3.31624 4.27855 3.40248 4.98284C3.49122 5.70587 4.03115 6.38266 5.03727 6.26518C5.56846 6.20269 5.96966 5.91272 6.16776 5.44903C6.38773 4.93347 6.31274 4.29293 5.98153 3.85486C5.72031 3.50927 5.32786 3.32617 4.86042 3.32617Z" fill="#E51021"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_375_2181">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer" class="youtube">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_375_2182)">
                    <path d="M0.0395996 11.424C-0.0125488 9.89179 -0.0125488 8.1723 0.0395996 6.64011C0.142725 3.60017 0.351318 0.578838 4.08022 0.230983C7.30932 -0.0697535 10.8736 -0.0110022 14.1197 0.0465857C16.0146 0.080324 18.0337 0.053566 19.9128 0.230983C23.6722 0.585236 23.7894 3.42275 23.9048 6.47898C23.9933 8.82205 24.1931 12.948 23.4871 15.1166C22.6046 17.8261 20.4378 17.7604 17.9998 17.8814C14.3605 18.0617 10.706 18.0158 7.07026 17.8773C3.72866 17.7499 0.833545 18.0826 0.231787 13.9951C0.112842 13.1848 0.0659668 12.2302 0.0384277 11.4234L0.0395996 11.424ZM11.0529 1.40543C8.73433 1.56656 6.19487 1.3618 3.89858 1.6765C1.23257 2.0418 1.55073 5.13817 1.48921 7.17643C1.42827 9.19085 1.38257 11.3437 1.5812 13.3511C1.85308 16.1031 2.91421 16.291 5.43198 16.4423C9.56343 16.6901 13.8707 16.6406 17.9962 16.4382C20.3681 16.3219 21.9437 16.6092 22.3591 13.763C22.7042 11.3978 22.5953 8.31423 22.4593 5.91939C22.3503 4.00154 22.4482 1.98247 20.0529 1.67068C18.6343 1.48628 17.006 1.52933 15.5675 1.48628C15.4568 1.48279 15.3548 1.43858 15.2447 1.43626L11.0529 1.40543Z" fill="#E51021"/>
                    <path d="M15.9029 8.09754C16.4103 8.59896 16.2053 9.28595 15.6539 9.65125C14.0525 10.7111 11.99 11.4685 10.3395 12.4946C9.71191 12.7779 9.01933 12.3608 8.9584 11.6825C8.78965 9.80715 9.08847 7.68395 8.96015 5.78181C9.06621 5.09541 9.80918 4.74174 10.4256 5.06807C12.0404 6.04183 13.8281 6.82595 15.4371 7.79448C15.5748 7.87766 15.7951 7.99109 15.9029 8.09754ZM10.3611 6.64097V10.8676L14.2846 8.8235L10.3611 6.64097Z" fill="#E51021"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_375_2182">
                    <rect width="24" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="addresses md:w-[calc(100%/3)] lg:w-[calc(100%/4)] flex flex-col gap-2">
                <h3 class="text-white font-bold text-base">Endereços</h3>
                <ul class="flex flex-col gap-0 text-white">
                  <li>Nomad  kingdom</li>
                  <li>Portual, Lisboa rua 0000</li>
                  <li>Código Postal 00000</li>
                </ul>
              </div>

              <div class="calling md:w-[calc(100%/3)] lg:w-[calc(100%/4)] flex flex-col gap-2">
                <h3 class="text-white font-bold text-base">Contactos</h3>
                <ul class="flex flex-col gap-0 text-white">
                  <li>+000 900 000 000</li>
                  <li>+244 900 000 000</li>
                  <li>+000 900 000 000</li>
                </ul>
              </div>

              <div class="email md:w-[calc(100%/3)] lg:w-[calc(100%/4)] flex flex-col gap-2">
                <h3 class="text-white font-bold text-base">Email</h3>
                <ul class="flex flex-col gap-0 text-white">
                  <li>nomadkingdom&commat;geral.com</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-content">
      <div class="copyright bg-(--secondary) py-5 md:py-8">
        <div class="limited-container flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
          <p class="text-white text-sm tracking-[6%] text-cente md:text-left">&copy; 2026 NOMAD KINGDOM. Todos os direitos reservados.</p>
          <p class="text-white text-sm tracking-[6%] text-cente md:text-left">Desenvolvido por </p>
        </div>
      </div>
      <div class="statement bg-(--secondary)/90 py-6">
        <div class="limited-container">
          <p class="text-(--primary) capitalize font-bold font-['ibm-sans']! text-5xl lg:text-6xl">Breaking systems to build stronger ones.</p>
        </div>
      </div>
    </div>
  </footer>
  `,
  styles: `
  
  `,
})
export class Footer {
  platformId = inject(PLATFORM_ID);

  goup(): void{
    if(!isPlatformBrowser(this.platformId)) return;
    window.scrollTo(0, 0);
  }
}
