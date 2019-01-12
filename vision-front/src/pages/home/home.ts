import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {VisionServiceProvider} from "../../providers/vision-service/vision-service";
import {VisionResoponse} from "../../shared/VisionResoponse";
import {VirtualPage} from "../virtual/virtual";
import {CameraPreview, CameraPreviewOptions} from "@ionic-native/camera-preview";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public visionProvider: VisionServiceProvider, public cameraPreview:CameraPreview) {

  }

  addPhoto() {
    this.visionProvider.selectPhotoByType(0)
  }

  goToVr() {


    this.navCtrl.push(VirtualPage)
  }
}
