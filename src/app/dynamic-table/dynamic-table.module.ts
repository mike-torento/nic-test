import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicTableCellWrapperComponent } from './dynamic-table-cell-wrapper/dynamic-table-cell-wrapper.component';



@NgModule({
  declarations: [
    DynamicTableComponent,
    DynamicTableCellWrapperComponent
  ],
  exports: [
    DynamicTableComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DynamicTableModule { }
