import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { ResultsforpPage } from '../resultsforp/resultsforp';
import { BrownjoggersPage } from '../brownjoggers/brownjoggers';
import { BlackpantsPage } from '../blackpants/blackpants';
import { CargopantPage } from '../cargopant/cargopant';
import { GraysweatPage } from '../graysweat/graysweat';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/**
 * Generated class for the PantsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pants',
  templateUrl: 'pants.html',
})
export class PantsPage {
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private transfer: FileTransfer, private alertCtrl: AlertController, public http: Http) {
  }



  // blackpants() {
  //   this.navCtrl.push(BlackpantsPage,{
  //     val: 'pants'
  //   })
  // }
  //
  // cargopant() {
  //   this.navCtrl.push(CargopantPage,{
  //     val: 'pants'
  //   })
  // }
  //
  // graysweat() {
  //   this.navCtrl.push(GraysweatPage,{
  //     val: 'pants'
  //   })
  // }

  ngOnInit() {
    this.loadPants();
  }
  loadPants(){
    this.http.get('https://daydalus.herokuapp.com/pullPants').map(res => res.json()).subscribe(data=> {
      this.photos = data;
    })
  }

  resultsforp(){
    this.navCtrl.push(ResultsforpPage,{
      val: 'anishnirmal'
    })
  }

  brownjoggers(index){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: 'Brown Joggers',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(BrownjoggersPage,{
               val: 'pants'
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

  cargopant(index){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: 'Cargo Pants',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(CargopantPage,{
               val: 'pants'
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

  graysweat(index){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: 'Gray Sweatpants',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(GraysweatPage,{
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

  blackpants(index){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: 'Black Pants',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(BlackpantsPage,{
              val: 'pants'
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

browncargo(index){
  let confirm = this.alertCtrl.create({
    title: 'Find Match or Delete?',
    message: 'Brown Cargo Pants',
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
          this.photos.splice(index,1);
          // this.photos.splice(index,1);
        }
      }
    ]
  });
confirm.present();
}




  brownslacks(index){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: 'Khaki Slacks',
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
            this.photos.splice(index,1);
            // this.photos.splice(index,1);
          }
        }
      ]
    });
confirm.present();
}

  takePhoto(){
  //   const options: CameraOptions = {
  //   quality: 50,
  //   destinationType: this.camera.DestinationType.DATA_URL,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  const option: FileUploadOptions = {
    headers: {clothingType:'pant'}
  }

  this.camera.getPicture().then((imageData) => {
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(imageData, 'https://daydalus.herokuapp.com/uploadPant',option).then((data)=> {
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
  this.loadPants();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PantsPage');
  }

}
