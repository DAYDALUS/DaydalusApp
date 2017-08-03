import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

/**
 * Generated class for the HatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-hats',
  templateUrl: 'hats.html',
})
export class HatsPage {
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private transfer: FileTransfer) {
  }

  ngOnInit() {
    this.photos = [];
  }

  takePhoto(){
  //   const options: CameraOptions = {
  //   quality: 50,
  //   destinationType: this.camera.DestinationType.DATA_URL,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  const option: FileUploadOptions = {
    headers: {clothingType:'hat'}
  }

  this.camera.getPicture().then((imageData) => {
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(imageData, 'https://daydalus.herokuapp.com/uploadHat',option).then((data)=> {
      console.log('file uploaded');

    }, (error)=> {
      console.log(error)
    });


    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    // this.base64Image = 'data:image/jpeg;base64,' + imageData;
    // this.photos.push(this.base64Image);
    // this.photos.reverse();
  }, (err) => {
    console.log("There was an error taking the photo.")
    // Handle error
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HatsPage');
  }

}
