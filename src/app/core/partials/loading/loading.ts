import { Component } from '@angular/core';

@Component({
  selector: 'kingdom-loading',
  imports: [],
  template: `
    <div class="gate-container w-screen h-screen fixed overflow-hidden top-0 z-101!">
      <div class="gate-element element-top absolute w-full h-full top-0 bg-(--primary)"></div>
      <div class="gate-element element-bottom absolute w-full h-full bottom-0 bg-(--primary)"></div>
    </div>
  `,
  styleUrl: './loading.css',
})
export class Loading {

}
