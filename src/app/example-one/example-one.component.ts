import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DynamicTableData } from '../dynamic-table/dynamic-table/dynamic-table.model';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleOneComponent implements OnInit {
  public tableData: DynamicTableData = [
    ['text1', '11', false],
    ['text2', '22', false],
    ['text3', '33', true],
  ];

  constructor() {}

  ngOnInit(): void {}
}
