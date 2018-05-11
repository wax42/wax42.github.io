import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisibilitePage } from './visibilite';

@NgModule({
  declarations: [
    VisibilitePage,
  ],
  imports: [
    IonicPageModule.forChild(VisibilitePage),
  ],
})
export class VisibilitePageModule {}
