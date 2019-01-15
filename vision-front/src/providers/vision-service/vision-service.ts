import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable, OnDestroy} from '@angular/core';
import {Camera} from "@ionic-native/camera";
import {Observable, Subscription} from "rxjs";
import {VisionResoponse} from "../../shared/VisionResoponse";
import {ModalController} from "ionic-angular";
import {ResultPage} from "../../pages/result/result";
import {HTTP, HTTPResponse} from "@ionic-native/http";

/*
  Generated class for the VisionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VisionServiceProvider implements OnDestroy {
  //BASE_URL = "http://192.168.1.28:5000/api/"
  BASE_URL = "http://163.172.109.219:5000/api/"
  //BASE_URL = "https://cors.io/?http://google.com/api/"
  DETECT_URL = "detect/"
  subscription: Subscription

  constructor(public httpClient: HttpClient, public http: HTTP, public camera: Camera, public modalCtrl: ModalController) {
    console.log('Hello VisionServiceProvider Provider');
    this.subscription = new Subscription()
  }

  mockResponse(): Observable<VisionResoponse[]> {
    let response: VisionResoponse = {
      "bounding_poly": {
        "vertices": [
          {
            "x": 357,
            "y": 61
          },
          {
            "x": 668,
            "y": 61
          },
          {
            "x": 668,
            "y": 532
          },
          {
            "x": 357,
            "y": 532
          }
        ]
      },
      "description": "Louvre, Mona Lisa",
      "locations": [
        {
          "lat_lng": {
            "latitude": 48.860423,
            "longitude": 2.336435
          }
        }
      ],
      "mid": "/m/04gdr",
      "score": 0.8157044053077698
    }

    return Observable.of(Array.of(response))
  }

  getVisionInfoByPhoto(imageData: any): Observable<VisionResoponse[]> {
    let api = this.BASE_URL + this.DETECT_URL
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
     return this.httpClient.post(api, imageData, {headers: httpHeaders}) as Observable<VisionResoponse[]>

    //return this.mockResponse()


  }

  getVisionInfoByPhoto2(imageData: any): Promise<HTTPResponse> {
    let api = this.BASE_URL + this.DETECT_URL
    let data = {"content": imageData}
    let response = this.http.post(api, data, {'Content-Type': 'application/json'})
    response.then(response => {
      console.log(response.data)
    });
    return response


    //return this.mockResponse()


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

      let subscription = this.getVisionInfoByPhoto(imageData).subscribe(response => {
        console.log(response)
        console.log(base64Image)
        this.openModal(response[0], base64Image)
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

  selectPhotoByType2(type: number): void { // type = 0 choose a picture, type = 1 use camera
    this.camera.getPicture({
      sourceType: type,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }).then(imageData => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;

      this.getVisionInfoByPhoto2(imageData).then(response => {
        console.log(response)
        console.log(base64Image)
        let info = response.data as VisionResoponse[]
        this.openModal(info[0], base64Image)
      });


    }, error => {
      alert("Error getting image from mobile.")
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

}
