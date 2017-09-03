import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact'
import { ClosetPage } from '../closet/closet';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
//SENDING TO IMAGE RECOGNITION
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { ResultsforpPage } from '../resultsforp/resultsforp';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { BarneyPage } from '../barney/barney';
import { BlackbuttonPage } from '../blackbutton/blackbutton';
import { BlueshirtPage } from '../blueshirt/blueshirt';

//GO TO LINE 144 FOR UPLOADING TO

@Component({
  selector: 'page-shirt',
  templateUrl: 'shirt.html',
})
export class ShirtPage {
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, private camera: Camera, private transfer: FileTransfer,
  public http: Http ) {
  }
  ngOnInit() {
    this.loadShirts();
  }
//HARDCODE
results(){
  let confirm = this.alertCtrl.create({
    title: 'Find Match or Delete?',
    message: 'Pink Button-Up',
    buttons: [
      {
        text: 'Match',
        handler: () => {

          this.navCtrl.push(ResultsforpPage,{
               val: 'jonathan'
            })

        }
      },
      {
        text: 'Delete ',
        handler: () => {

        }
      }
    ]
  });
confirm.present();
}

barney(){
  let confirm = this.alertCtrl.create({
    title: 'Find Match or Delete?',
    message: 'Purple and Green T-Shirt',
    buttons: [
      {
        text: 'Match',
        handler: () => {

          this.navCtrl.push(BarneyPage,{
               val: 'jonathan'
            })

        }
      },
      {
        text: 'Delete ',
        handler: () => {

        }
      }
    ]
  });
confirm.present();
}


blackbutton(){
  let confirm = this.alertCtrl.create({
    title: 'Find Match or Delete?',
    message: 'Gray Button-Up ',
    buttons: [
      {
        text: 'Match',
        handler: () => {

          this.navCtrl.push(BlackbuttonPage,{
               val: 'jonathan'
            })

        }
      },
      {
        text: 'Delete ',
        handler: () => {
        }
      }
    ]
  });
confirm.present();
}

blueshirt(){
  let confirm = this.alertCtrl.create({
    title: 'Find Match or Delete?',
    message: 'Blue T-Shirt',
    buttons: [
      {
        text: 'Match',
        handler: () => {

          this.navCtrl.push(BlueshirtPage,{
               val: 'jonathan'
            })

        }
      },
      {
        text: 'Delete ',
        handler: () => {

        }
      }
    ]
  });
confirm.present();
}

//CODE FOR LOADING SHIRTS
  loadShirts(){
    this.http.get('https://daydalus.herokuapp.com/pullShirts').map(res => res.json()).subscribe(data=> {
      this.photos = data;
    })
  }
  takePhoto(){

  const option: FileUploadOptions = {
    headers: {clothingType:'shirt'}
  }
  this.camera.getPicture().then((imageData) => {
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(imageData, 'https://daydalus.herokuapp.com/uploadShirt',option).then((data)=> {
      console.log('file uploaded');

    }, (error)=> {
      console.log(error)
    });


    }, (err) => {
      console.log("There was an error taking the photo.")
      // Handle error
    });
    this.loadShirts();
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



  deletePhoto(index){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: 'Red T-Shirt',
      buttons: [
        {
          text: 'Match',
          handler: () => {

              this.navCtrl.push(ContactPage,{
                val: 'jonathan'
              })

          }
        },
        {
          text: 'Delete ',
          handler: () => {
            this.photos.splice(index,1);
            // this.photos.splice(index,1);
          }
        }
      ]
    });
confirm.present();
}

}
