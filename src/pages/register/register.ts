import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth' 
import { TabsPage } from '../tabs/tabs';

/**
 * Pierre Munin -- 1106420
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user= {} as User; 
 
  constructor(private aFAuth: AngularFireAuth, private nav: NavController, private toast: ToastController) { }
 
  async register(user: User) {
    
    try {
    const result =  await this.aFAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    this.nav.setRoot(TabsPage);   
    console.log(result);
  } 
    catch(e) {
      this.toast.create({
        message: 'Error:',
        duration: 3000
       }).present();
      console.log(e);
    }
  }
}