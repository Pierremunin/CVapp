import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Pierre Munin -- 1106420
 */

@IonicPage()
@Component({
  selector: 'page-works',
  templateUrl: 'works.html',
})

export class WorksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorksPage');
  }

}
