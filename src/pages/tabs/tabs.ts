import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WorksPage } from '../works/works';
import { SkillsPage } from '../skills/skills';

import { AngularFireAuth } from 'angularfire2/auth' 

/**
 * Pierre Munin -- 1106420
 */

@IonicPage( { name: 'tabs-page' } )
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WorksPage;
  tab3Root = SkillsPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;
  myIndex: number;
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex 
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad TabsPage');
    }
  


}
