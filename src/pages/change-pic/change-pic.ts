import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOriginal } from '@ionic-native/camera';


/**
 * Generated class for the ChangePicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-pic',
  templateUrl: 'change-pic.html',
})
export class ChangePicPage {
  image: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public Camera:CameraOriginal) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePicPage');
  }

  sacarCamara(){
    this.Camera.getPicture({
      destinationType: this.Camera.DestinationType.DATA_URL,
      sourceType: this.Camera.PictureSourceType.CAMERA,
      mediaType: this.Camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.Camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image = "data:image/jpeg:base64," + resultado;
    }).catch(error => {
      console.log(error);
    })
  }

  tomarGaleria(){
    this.Camera.getPicture({
      destinationType: this.Camera.DestinationType.DATA_URL,
      sourceType: this.Camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.Camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.Camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image = "data:image/jpeg:base64," + resultado;
    }).catch(error => {
      console.log(error);
    })
  }

  

}
