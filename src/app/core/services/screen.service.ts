import { isPlatformBrowser } from "@angular/common";
import { HostListener, inject, Injectable, PLATFORM_ID, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ScreenService {

    constructor() {
        this.setupWidth();
    }

    platformId = inject(PLATFORM_ID);

    readonly width$ = signal(0);

    setupWidth() {
        let wid = 320;
        if(isPlatformBrowser(this.platformId)){
            wid = window.innerWidth;
        };
        this.width$.set(wid);
    }

    /** Tipo de tela baseado na largura */
    get type(): 'mobile' | 'tablet' | 'laptop' | 'desktop' {
        const w = this.width$();

        if (w < 640) return 'mobile';       // sm
        if (w < 1024) return 'tablet';      // md
        if (w < 1440) return 'laptop';      // lg
        return 'desktop';                   // xl+
    }

    get isMobile(): boolean {
        return this.width$() < 640;
    }

    get isTablet(): boolean {
        return this.width$() >= 640 && this.width$() < 1024;
    }

    get isLaptop(): boolean {
        return this.width$() >= 1024 && this.width$() < 1440;
    }

    get isDesktop(): boolean {
        return this.width$() >= 1440;
    }

}