import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeOfflineComponent } from './modules/home-offline/home-offline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeOfflineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
