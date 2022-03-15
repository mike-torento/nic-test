import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTwoComponent } from './example-two.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ExampleTwoComponent,
  },
];

@NgModule({
  declarations: [ExampleTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    HttpClientModule,
  ],
})
export class ExampleTwoModule {}
