import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VirtualPage } from './virtual';

@NgModule({
  declarations: [
    VirtualPage,
  ],
  imports: [
    IonicPageModule.forChild(VirtualPage),
  ],
})
export class VirtualPageModule {}
