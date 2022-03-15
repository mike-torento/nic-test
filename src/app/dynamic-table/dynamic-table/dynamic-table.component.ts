import {
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  SkipSelf,
} from '@angular/core';
import { DynamicTableConfig, DynamicTableData } from './dynamic-table.model';
import { DYNAMIC_TABLE_CONFIG } from '../tokens/tokens';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent implements OnInit {
  @Input() tableData!: DynamicTableData;

  constructor(
    @Inject(DYNAMIC_TABLE_CONFIG)
    readonly tableConfig: DynamicTableConfig
  ) {
    console.log('AAAA: ', tableConfig);
  }

  ngOnInit(): void {}
}
