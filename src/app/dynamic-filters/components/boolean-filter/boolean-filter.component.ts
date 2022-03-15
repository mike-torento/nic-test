import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractFilter } from '../../abstract-filter';

@Component({
  selector: 'app-boolean-filter',
  templateUrl: './boolean-filter.component.html',
  styleUrls: ['./boolean-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooleanFilterComponent extends AbstractFilter implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
