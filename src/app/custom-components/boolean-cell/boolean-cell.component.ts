import { Component, OnInit } from '@angular/core';
import { BaseCellComponent } from '../abstract-cell';

@Component({
  selector: 'app-boolean-cell',
  templateUrl: './boolean-cell.component.html',
  styleUrls: ['./boolean-cell.component.css'],
})
export class BooleanCellComponent extends BaseCellComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
