import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';

const routes: Routes = [
  {
    path: '',
    component: ForLoopComponent
  },
  {
    path: 'for-loop',
    component: ForLoopComponent,
  },
  {
    path: 'ng-if',
    component: NgIfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
