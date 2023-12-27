import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SharedLoginModule,
  SharedRegisterModule
} from './modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedLoginModule,
    SharedRegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
