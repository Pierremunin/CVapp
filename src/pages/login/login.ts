import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth' 
import { TabsPage } from '../tabs/tabs';



/**
 * Pierre Munin -- 1106420
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  
  constructor(private afAuth: AngularFireAuth, private nav: NavController, public navParams: NavParams) {
    
   }
   
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  async login(user: User) {
    
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
        this.nav.setRoot(TabsPage);        
      }
    } catch (e) {
      console.log(e);
    }
  }

}