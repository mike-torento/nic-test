import { Component, OnInit } from '@angular/core';
import { BaseCellComponent } from '../abstract-cell';

@Component({
  selector: 'app-text-cell-component',
  templateUrl: './text-cell-component.component.html',
  styleUrls: ['./text-cell-component.component.css'],
})
export class TextCellComponent extends BaseCellComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
