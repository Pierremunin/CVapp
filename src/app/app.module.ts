import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';


import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { WorksPage } from '../pages/works/works';
import { SkillsPage } from '../pages/skills/skills';

var firebaseConfig = {
  apiKey: "AIzaSyBK88GrYs7u-fakc-hZN4PY3HZnUs7qm2g",
  authDomain: "cvapp-6b068.firebaseapp.com",
  databaseURL: "https://cvapp-6b068.firebaseio.com",
  projectId: "cvapp-6b068",
  storageBucket: "cvapp-6b068.appspot.com",
  messagingSenderId: "676162595207"
};

/**
 * Pierre Munin -- 1106420
 */

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SkillsPage,
    WorksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SkillsPage,
    WorksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}

