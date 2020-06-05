import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOfflineComponent } from './modules/home-offline/home-offline.component';
import { HomeOnlineComponent } from './modules/home-online/home-online.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AuthGuard} from './operations/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeOfflineComponent },
  { path: 'home', component: HomeOnlineComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeOfflineComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
