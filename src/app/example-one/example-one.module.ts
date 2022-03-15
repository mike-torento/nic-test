import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleOneComponent } from './example-one.component';
import { RouterModule, Routes } from '@angular/router';
import { DYNAMIC_TABLE_CONFIG } from '../dynamic-table/tokens/tokens';
import { DynamicTableConfig } from '../dynamic-table/dynamic-table/dynamic-table.model';
import { BooleanFilterComponent } from '../dynamic-filters/components/boolean-filter/boolean-filter.component';
import { NumberCellComponent } from '../custom-components/number-cell/number-cell.component';
import { TextCellComponent } from '../custom-components/text-cell-component/text-cell-component.component';
import { BooleanCellComponent } from '../custom-components/boolean-cell/boolean-cell.component';
import { DynamicTableModule } from '../dynamic-table/dynamic-table.module';

const routes: Routes = [
  {
    path: '',
    component: ExampleOneComponent,
  },
];

const tableConfig: DynamicTableConfig = {
  headerConfig: {
    columns: [
      {
        title: 'Text Column',
        sortable: true,
      },
      {
        title: 'Number Column',
        sortable: true,
      },
      {
        title: 'Boolean Filtered Column',
        filterConfig: {
          type: 'boolean',
          component: BooleanFilterComponent,
        },
      },
    ],
  },
  contentConfig: {
    rowConfig: {
      cellConfigs: [
        {
          type: 'text',
          component: TextCellComponent,
        },
        {
          type: 'number',
          component: NumberCellComponent,
        },
        {
          type: 'boolean',
          component: BooleanCellComponent,
        },
      ],
    },
  },
};

@NgModule({
  declarations: [ExampleOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes), DynamicTableModule],
  providers: [
    {
      provide: DYNAMIC_TABLE_CONFIG,
      useValue: tableConfig,
    },
  ],
})
export class ExampleOneModule {}
