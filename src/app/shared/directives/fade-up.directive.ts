import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[fade-up]',
})
export class FadeUpDirective implements AfterViewInit {
  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {}

  ngAfterViewInit() {
    const el = this.el.nativeElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate when element enters viewport
            this.renderer.setStyle(el, 'opacity', '1');
            this.renderer.setStyle(el, 'transform', 'translateY(0) scale(1)');
            this.renderer.setStyle(
              el,
              'transition',
              'opacity 1.5s ease-out, transform 1.5s ease-out'
            );
          } else {
            // Reset animation when element leaves viewport
            this.renderer.setStyle(el, 'opacity', '0');
            this.renderer.setStyle(el, 'transform', 'translateY(20px) scale(0.5)');
          }
        });
      },
      { threshold: 0.1 } // adjust as needed
    );

    observer.observe(el);
  }
}
