import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated'


import 'rxjs/add/operator/map';
/**
 * Pierre Munin -- 1106420
 */
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  getShoppingItems() {
    return this.afd.list('/shoppingItems/');
  }
 
  addItem(name) {
    this.afd.list('/shoppingItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('shoppingItems/').remove(id);
 
 }
}
