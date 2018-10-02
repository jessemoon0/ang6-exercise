import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { OtherComponent } from './other/other.component';
import { TestingComponent } from './testing/testing.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'other',
    component: OtherComponent
  },
  {
    path: 'testing',
    component: TestingComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
