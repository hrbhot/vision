import {Component, OnDestroy} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CameraPreview, CameraPreviewOptions} from "@ionic-native/camera-preview";
import {VisionServiceProvider} from "../../providers/vision-service/vision-service";
import {VisionResoponse} from "../../shared/VisionResoponse";
import {Subscription} from "rxjs";
import {delay} from "rxjs/operator/delay";

/**
 * Generated class for the VirtualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-virtual',
  templateUrl: 'virtual.html',
})
export class VirtualPage implements OnDestroy {
  info: VisionResoponse[]
  loop = false
  subscription: Subscription

  constructor(public navCtrl: NavController, public navParams: NavParams, public cameraPreview: CameraPreview, public visionProvider: VisionServiceProvider) {
    this.subscription = new Subscription()
    this.startCamera()

  }


  ionViewDidLoad() {
  }

  async firstPicture() {
    this.loop = true
    console.log("will take picture")
    this.cameraPreview.takePicture().then(
      async image => {
        console.log("Took picture")
        let base64Image = 'data:image/jpeg;base64,' + image;
        let sub = this.visionProvider.getVisionInfoByPhoto(image).subscribe(value => {
          this.info = value
          console.log("Result", value)
        });
      },
      err => {
        console.log("error took picture", err)
      }
    );
    this.sendPhoto()

  }

  stopGetting() {
    this.loop=false
  }

  startCamera() {
    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      camera: 'rear',
      toBack: true,
      tapPhoto: false
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts)


  }

  sendPhoto() {

    setTimeout(() => {
        if (!this.loop) {
          return
        }
        console.log("continue sendng photo");
        this.cameraPreview.takePicture().then(
          image => {
            this.visionProvider.getVisionInfoByPhoto(image)
          }
        )
        if (this.loop) {
          this.sendPhoto()
        }

      },
      3000);

  }

  ngOnDestroy(): void {
    this.cameraPreview.stopCamera()
    this.loop = false
    this.subscription.unsubscribe()

  }

}
