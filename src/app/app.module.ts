import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeOfflineComponent } from './modules/home-offline/home-offline.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from'@angular/common/http';



import {BddService} from './services/bdd.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeOfflineComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    BddService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
