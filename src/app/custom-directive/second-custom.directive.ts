import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSecondCustomDirective]',
  standalone: false
})
export class SecondCustomDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {

    const heading = this.renderer.createElement('h1');
    const text = this.renderer.createText('Hello from second custom directive');
    this.renderer.appendChild(heading, text);

    const container = this.elementRef.nativeElement.querySelector('div#myCustomContainer');
    this.renderer.appendChild(container, heading);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
  }


  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }
  @HostListener('mouseleave') onMouseLeave(data: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
