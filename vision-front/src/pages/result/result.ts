import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Screenshot} from "@ionic-native/screenshot";
import {VisionResoponse} from "../../shared/VisionResoponse";

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  image: any
  response: VisionResoponse

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public screenShot: Screenshot) {


  }

  ionViewWillLoad() {
    console.log('ionViewWillLoad ResultPage');
    this.image = this.navParams.get('image')
    this.response = this.navParams.get('response')
  }

  savePhoto() {
    this.screenShot.save("jpg", 100, "myview").then(
      () => {
        this.closeModal()
      },
      () => {
        alert("Failed to take a screenshot, you can retry")
      }
    );
  }

  closeModal() {
    this.viewCtrl.dismiss()
  }

}
