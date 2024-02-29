import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'learnal-button',
  template: `@if(link){
    <a
      [routerLink]="link"
      [class]="customClasses"
      class="max-w-[fit-content] bg-accent hover:bg-accent-dark text-white mx-2 transition-all delay-[100ms] text-center font-semibold py-2 px-3 rounded-[30px] capitalize"
      (click)="buttonClick()"
    >
      {{ label }}
    </a>
    }@else{
    <button
      type="{{ buttonType }}"
      [class]="customClasses"
      class="max-w-[fit-content] bg-accent hover:bg-accent-dark text-white mx-2 transition-all delay-[100ms] text-center font-semibold py-2 px-3 rounded-[30px] capitalize"
      (click)="buttonClick()"
    >
      {{ label }}
    </button>
    } `,
})
export class Button {
  @Input({ required: true }) label: string = '';
  @Input() customClasses: string = '';
  @Input() buttonType: string = 'button';
  @Input() link: string | Array<string> = '';
  @Output() buttonClicked = new EventEmitter<void>();

  buttonClick(): void {
    this.buttonClicked.emit();
  }
}
