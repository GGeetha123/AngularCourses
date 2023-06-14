import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]' //changed the selector
})
export class HighlightDirective {

  @Input() highlight:string = ""
//ElementRef would get the target element reference
// <h1  [hightlight] ="data" </h1>, in this case elementref would present h1
  constructor(private el:ElementRef) { }
@HostListener("mouseover") dosomething():void {
  let element = this.el.nativeElement
  console.log(element.children[1])
  let regex = /good|excellent|super|great|statisfied|extraordinary/
  if(regex.test(this.highlight.toLowerCase())){
    element.children[1].style.color = "darkred"
    element.children[1].style.background = "yellow"
    element.children[1].style.fontSize ="25px"
  }

}
@HostListener("mouseleave") turnOriginal():void  {
  let element = this.el.nativeElement
  console.log(element.children[1])
  element.children[1].style.color = "rgb(54, 54, 54)";
  element.children[1].style.background = "none"
  element.children[1].style.fontSize ="16px"
}
}
