import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {VisionServiceProvider} from "../../providers/vision-service/vision-service";
import {VisionResoponse} from "../../shared/VisionResoponse";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public visionProvider: VisionServiceProvider) {

  }

  addPhoto() {
    this.visionProvider.selectPhotoByType(0)
  }
}
