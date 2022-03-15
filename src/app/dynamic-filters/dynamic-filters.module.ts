import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanFilterComponent } from './components/boolean-filter/boolean-filter.component';
import { TextFilterComponent } from './components/text-filter/text-filter.component';

@NgModule({
  declarations: [BooleanFilterComponent, TextFilterComponent],
  imports: [CommonModule],
})
export class DynamicFiltersModule {}
