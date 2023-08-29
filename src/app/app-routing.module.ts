import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent},
  { path: 'welcome', component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
