import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[myFirstCustomDirective]',
    standalone : false
})
export class MyFirstCustomDirective implements OnInit{
    private element : ElementRef;
    constructor(elementRef : ElementRef){
        this.element = elementRef;
    }
    
    ngOnInit(){
        this.element.nativeElement.style.color = 'purple';
        this.element.nativeElement.style.fontSize = '5rem';
    }
}