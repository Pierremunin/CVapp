import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillsPage } from './skills';

/** 
Pierre Munin  1106420
*/ 


@NgModule({
  declarations: [
    SkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillsPage),
  ],
})
export class SkillsPageModule {}
