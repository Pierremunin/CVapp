import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/** 
Pierre Munin  1106420
*/

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

}
