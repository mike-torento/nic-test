import { InjectionToken } from '@angular/core';
import { DynamicTableConfig } from '../dynamic-table/dynamic-table.model';

export const DYNAMIC_TABLE_CONFIG = new InjectionToken<DynamicTableConfig>(
  'TABLE CONFIG'
);
