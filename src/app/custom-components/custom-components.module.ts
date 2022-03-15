import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanCellComponent } from './boolean-cell/boolean-cell.component';
import { NumberCellComponent } from './number-cell/number-cell.component';
import { TextCellComponent } from './text-cell-component/text-cell-component.component';

@NgModule({
  declarations: [BooleanCellComponent, NumberCellComponent, TextCellComponent],
  imports: [CommonModule],
})
export class CustomComponentsModule {}
