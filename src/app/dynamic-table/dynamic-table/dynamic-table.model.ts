import { Type } from '@angular/core';
import { AbstractFilter } from '../../dynamic-filters/abstract-filter';
import { BaseCellComponent } from '../../custom-components/abstract-cell';

export interface DynamicTableCellConfig {
  type: string;
  component: Type<BaseCellComponent>;
}

export interface DynamicTableContentConfig {
  rowConfig: {
    cellConfigs: DynamicTableCellConfig[];
  };
}

export interface DynamicFilterColumnConfig {
  type: string;
  component: Type<AbstractFilter>;
  disabled?: boolean;
}

export interface TableColumnHeaderConfig {
  title: string;
  sortable?: boolean;
  filterConfig?: DynamicFilterColumnConfig;
}

export interface DynamicTableHeaderConfig {
  columns: TableColumnHeaderConfig[];
}

export interface DynamicTableConfig {
  headerConfig: DynamicTableHeaderConfig;
  contentConfig: DynamicTableContentConfig;
}

export type DynamicTableData = Array<Array<any>>;
