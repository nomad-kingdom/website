import { Component } from '@angular/core';
import { HeroSection } from "./sections/hero.section";
import { AboutUsSection } from "./sections/about-us.section";
import { ServicesSection } from "./sections/services.section";

@Component({
  selector: 'kingdom-home',
  imports: [HeroSection, AboutUsSection, ServicesSection],
  template: `
    <section class="section-container">
      <div class="hero-section"> 
        <kingdom-hero></kingdom-hero>
      </div>
      <div class="about-us-section flex flex-col gap-12 bg-black py-12">
        <kingdom-about-us></kingdom-about-us>
        <kingdom-services></kingdom-services>
      </div>
    </section>
  `,
  styles: ``,
})
export class HomePage {

}
