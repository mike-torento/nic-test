import { Component, OnInit } from '@angular/core';
import { BaseCellComponent } from '../abstract-cell';

@Component({
  selector: 'app-number-cell',
  templateUrl: './number-cell.component.html',
  styleUrls: ['./number-cell.component.css'],
})
export class NumberCellComponent extends BaseCellComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
