import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './login';
import { SignInWithApple } from '@ionic-native/sign-in-with-apple/ngx';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    SignInWithApple
  ],
})
export class LoginPageRoutingModule { }
