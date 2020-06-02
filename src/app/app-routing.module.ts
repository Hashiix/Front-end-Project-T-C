import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOfflineComponent } from './modules/home-offline/home-offline.component';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeOfflineComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: HomeOfflineComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
