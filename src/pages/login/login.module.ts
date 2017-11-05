import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

/**
 * Pierre Munin -- 1106420
 */

 @NgModule({
  declarations: [
    LoginPage,
  ],
  
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
