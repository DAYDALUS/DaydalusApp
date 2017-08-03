import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AboutPage } from '../about/about';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';
import { ClosetPage } from '../closet/closet';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, private camera: Camera, private alertCtrl: AlertController, private transfer: FileTransfer) {

  }
//CAMERA
  load(){
    this.navCtrl.push(AboutPage,{
      val: 'anishnirmal'
    })
  }
  //SIGNIN
  load1(){
    this.navCtrl.push(SigninPage,{
      val: 'anishnirmal'
    })
  }
  //SIGNUP
  load2(){
    this.navCtrl.push(SignupPage,{
      val: 'anishnirmal'
    })
  }
//CLOSET
  load3(){
    this.navCtrl.push(ClosetPage,{
      val: 'anishnirmal'
    })
  }
//TAKING PHOTOS
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

  this.camera.getPicture().then((imageData) => {
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(imageData, 'https://daydalus.herokuapp.com/uploadImage').then((data)=> {
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

savePhoto(){

  const options: CameraOptions = {
   quality: 50,
   destinationType: this.camera.DestinationType.DATA_URL,
   encodingType: this.camera.EncodingType.JPEG,
   mediaType: this.camera.MediaType.PICTURE
 }

  this.camera.getPicture(options).then((imageData) =>{
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    this.photos.push(this.base64Image);
    this.photos.reverse();
  },(err) => {
    console.log("There was an error taking the photo.")
    // Handle error
  });
}
//DELETING PHOTOS
// deletePhoto(index){
//   let confirm = this.alertCtrl.create({
//     title: 'Are you sure you want to delete this Photo?',
//     message: '',
//     buttons: [
//       {
//         text: 'No',
//         handler: () => {
//
//         }
//       },
//       {
//         text: 'Yes',
//         handler: () => {
//           this.photos.splice(index,1);
//         }
//       }
//     ]
//   });
//   confirm.present();
// }

}
