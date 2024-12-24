import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[myFirstCustomDirective]',
    standalone: false
})
export class MyFirstCustomDirective implements OnInit {
    private element: ElementRef;
    constructor(elementRef: ElementRef) {
        this.element = elementRef;
    }

    @Input() defaultFont : string = '5rem';
    @Input() defaultColor : string = 'purple';
    @Input() hoverFont? : string;
    @Input() hoverColor? : string;

    @HostBinding('style.fontSize') fontSize: string = this.defaultFont;
    @HostBinding('style.color') color: string = this.defaultColor;

    ngOnInit() {
        // this.element.nativeElement.style.color = 'purple';
        // this.element.nativeElement.style.fontSize = '5rem';
    }

    @HostListener('mouseenter') onMouseEnter(eventData: Event) {
        //     this.element.nativeElement.style.fontSize = '10rem';
        //     this.element.nativeElement.style.color = 'yellow';
        this.fontSize = this.hoverFont? this.hoverFont : '10rem';
        this.color = this.hoverColor? this.hoverColor : 'yellow';
    }
    @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    //     this.element.nativeElement.style.fontSize = '5rem';
    //     this.element.nativeElement.style.color = 'purple';
        this.fontSize = this.defaultFont;
        this.color = this.defaultColor;
    }

}