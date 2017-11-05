import { Component, NgModule } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { environments } from '../environments/environments';
import firebase from 'firebase';

/**
 * Pierre Munin -- 1106420
 */

@Component({
  selector: "tabs-page",
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = 'LoginPage'
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Plugins available.
      // Higher level things.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    firebase.initializeApp(environments.firebase);
  }
  
}