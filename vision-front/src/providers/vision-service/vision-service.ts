import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnDestroy} from '@angular/core';
import {Camera} from "@ionic-native/camera";
import {Observable, Subscription} from "rxjs";
import {VisionResoponse} from "../../shared/VisionResoponse";
import {ModalController} from "ionic-angular";
import {ResultPage} from "../../pages/result/result";

/*
  Generated class for the VisionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VisionServiceProvider implements OnDestroy {
  BASE_URL = "http://service.url/api/"
  DETECT_URL = "detect/"
  subscription: Subscription

  constructor(public http: HttpClient, public camera: Camera, public modalCtrl: ModalController) {
    console.log('Hello VisionServiceProvider Provider');
    this.subscription = new Subscription()
  }

  mockResponse(): Observable<VisionResoponse> {
    let response = new VisionResoponse()
    response.mid = "1234"
    response.description = "Forbidden city"

    return Observable.of(response)
  }

  getVisionInfoByPhoto(imageData: any): Observable<VisionResoponse> {
    let api = this.BASE_URL + this.DETECT_URL
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    // return this.http.post(api, imageData, {headers: httpHeaders}) as Observable<VisionResoponse>

    return this.mockResponse()


  }

  openModal(response: VisionResoponse, image: any) {
    const modal = this.modalCtrl.create(ResultPage,
      {
      response: response,
       image: image
       }
    )
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
        console.log(response)
        console.log(base64Image)
        this.openModal(response, base64Image)
      });
      this.subscription.add(subscription)


    }, error => {
      alert("Error getting image from mobile.")
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
