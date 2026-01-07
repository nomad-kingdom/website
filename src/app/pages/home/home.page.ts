import { Component } from '@angular/core';
import { HeroSection } from "./sections/hero.section";
import { AboutUsSection } from "./sections/about-us.section";
import { ServicesSection } from "./sections/services.section";
import { StatementSection } from "./sections/statement.section";
import { TrainingSection } from "./sections/training.section";
import { PartnersSection } from "./sections/partners.section";

@Component({
  selector: 'kingdom-home',
  imports: [HeroSection, AboutUsSection, ServicesSection, StatementSection, TrainingSection, PartnersSection],
  template: `
    <section class="section-container">
      <div class="hero-section"> 
        <kingdom-hero></kingdom-hero>
      </div>
      <div class="about-us-section flex flex-col gap-12 bg-black py-12">
        <div id="about-us">
          <kingdom-about-us></kingdom-about-us>
        </div>
        <div id="services">
          <kingdom-services></kingdom-services>
        </div>
      </div>
      <div class="statement-section">
        <kingdom-statement></kingdom-statement>
      </div>
      <div id="training" class="training-section bg-black py-12">
        <kingdom-training></kingdom-training>
      </div>
      <div class="partners-section">
        <kingdom-partners></kingdom-partners>
      </div>
    </section>
  `,
  styles: ``,
})
export class HomePage {

}
