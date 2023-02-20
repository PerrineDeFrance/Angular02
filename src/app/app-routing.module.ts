import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';

const ROUTES: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent,
  },

  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: '',
    redirectTo: 'user-profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export { ROUTES };
