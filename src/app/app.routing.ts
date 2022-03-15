import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/exp1', pathMatch: 'full' },
  {
    path: 'exp1',
    loadChildren: async () =>
      import('./example-one/example-one.module').then(
        (m) => m.ExampleOneModule
      ),
  },
  {
    path: 'exp2',
    loadChildren: async () =>
      import('./example-two/example-two.module').then(
        (m) => m.ExampleTwoModule
      ),
  },
  {
    path: '**',
    redirectTo: '/exp1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
