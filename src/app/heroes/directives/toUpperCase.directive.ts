import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[toUpperCase]',
})
export class ToUpperCaseDirective {
  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }
}
