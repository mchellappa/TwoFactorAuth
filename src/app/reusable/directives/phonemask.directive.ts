
import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { PhonePipe } from "../pipes/phone.pipe";

@Directive({ selector: "[phone]" })
export class PhoneMask implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private phonePipe: PhonePipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.phonePipe.transform(this.el.value,[]);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.phonePipe.transform(value,[]); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.phonePipe.transform(value,[]);
  }

  @HostListener("keyup", ["$event.target.value", "$event.keyCode"])
  onkeypress(value, keyCode) {
if(value.length >= 13){
  return false;
}

    if(keyCode != 8){
      this.el.value = this.phonePipe.transform(value,[]);
    }
  }

}