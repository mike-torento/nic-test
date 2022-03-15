import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractFilter } from '../../abstract-filter';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFilterComponent extends AbstractFilter implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
