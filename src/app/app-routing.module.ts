import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOfflineComponent } from './modules/home-offline/home-offline.component';
import { HomeOnlineComponent } from './modules/home-online/home-online.component';
import { ProfileComponent } from './modules/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeOfflineComponent },
  { path: 'home-online', component: HomeOnlineComponent},
  { path: 'profile', component: ProfileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
