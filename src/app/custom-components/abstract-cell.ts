import { Directive, Input } from '@angular/core';

@Directive({})
export abstract class BaseCellComponent {
  @Input() value: any;
}
