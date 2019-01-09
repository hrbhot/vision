import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Camera} from "@ionic-native/camera";
import {Observable, Subscription} from "rxjs";
import {VisionResoponse} from "../../shared/VisionResoponse";
import {ModalController} from "ionic-angular";

/*
  Generated class for the VisionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VisionServiceProvider {
  BASE_URL = "http://service.url/api/"
  DETECT_URL = "detect/"
  subscription: Subscription

  constructor(public http: HttpClient, public camera: Camera, public modalCtrl: ModalController) {
    console.log('Hello VisionServiceProvider Provider');
    this.subscription = new Subscription()
  }

  getVisionInfoByPhoto(imageData: any): Observable<VisionResoponse> {
    let api = this.BASE_URL + this.DETECT_URL
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post(api, imageData, {headers: httpHeaders}) as Observable<VisionResoponse>


  }

  openModal() {
    let modal = this.modalCtrl.create("ResultPage")
    modal.present()

  }

  selectPhotoByType(type: number): void { // type = 0 choose a picture, type = 1 use camera
    this.camera.getPicture({
      sourceType: type,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }).then(imageData => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;

      let subscription = this.getVisionInfoByPhoto(base64Image).subscribe(response => {
        this.openModal()
      });


    }, error => {
      alert("Error getting image from mobile.")
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

}
