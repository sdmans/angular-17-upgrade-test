import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    ForLoopComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
