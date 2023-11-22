import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

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
  },
  {
    path: 'ng-switch',
    component: NgSwitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
