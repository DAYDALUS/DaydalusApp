import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { NikeshoePage } from '../nikeshoe/nikeshoe';
import { RosheshoePage } from '../rosheshoe/rosheshoe';
import { GrayshoePage } from '../grayshoe/grayshoe';
import { BrownshoePage } from '../brownshoe/brownshoe';
import { VanshoePage } from '../vanshoe/vanshoe';
import { BlackvanshoePage } from '../blackvanshoe/blackvanshoe';
/**
 * Generated class for the ShoesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-shoes',
  templateUrl: 'shoes.html',
})
export class ShoesPage {
  public photos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private transfer: FileTransfer, public http: Http,private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.loadShoes();
  }
  //
  // nikeshoe(){
  //   this.navCtrl.push(NikeshoePage,{
  //     val: 'jonathan'
  //   })
  // }
  nikeshoe(){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: '',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(NikeshoePage,{
                 val: 'jonathan'
              })

          }
        },
        {
          text: 'Delete ',
          handler: () => {
            //this.photos.splice(index,1);
            // this.photos.splice(index,1);
          }
        }
      ]
    });
  confirm.present();
  }
  //
  // rosheshoe(){
  //   this.navCtrl.push(RosheshoePage,{
  //     val: 'jonathan'
  //   })
  // }
  rosheshoe(){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: '',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(RosheshoePage,{
                 val: 'jonathan'
              })

          }
        },
        {
          text: 'Delete ',
          handler: () => {
            //this.photos.splice(index,1);
            // this.photos.splice(index,1);
          }
        }
      ]
    });
  confirm.present();
  }
  //
  // grayshoe(){
  //   this.navCtrl.push(GrayshoePage,{
  //     val: 'jonathan'
  //   })
  // }
  //
  grayshoe(){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: '',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(GrayshoePage,{
                 val: 'jonathan'
              })

          }
        },
        {
          text: 'Delete ',
          handler: () => {
            //this.photos.splice(index,1);
            // this.photos.splice(index,1);
          }
        }
      ]
    });
  confirm.present();
  }
  // brownshoe(){
  //   this.navCtrl.push(BrownshoePage,{
  //     val: 'jonathan'
  //   })
  // }
  //
  brownshoe(){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: '',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(BrownshoePage,{
                 val: 'jonathan'
              })

          }
        },
        {
          text: 'Delete ',
          handler: () => {
            //this.photos.splice(index,1);
            // this.photos.splice(index,1);
          }
        }
      ]
    });
  confirm.present();
  }
  // vanshoe(){
  //   this.navCtrl.push(VanshoePage,{
  //     val: 'jonathan'
  //   })
  // }
  //
  vanshoe(){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: '',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(VanshoePage,{
                 val: 'jonathan'
              })

          }
        },
        {
          text: 'Delete ',
          handler: () => {
            //this.photos.splice(index,1);
            // this.photos.splice(index,1);
          }
        }
      ]
    });
  confirm.present();
  }
  // blackvanshoe(){
  //   this.navCtrl.push(BlackvanshoePage,{
  //     val: 'jonathan'
  //   })
  // }
  blackvanshoe(){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: '',
      buttons: [
        {
          text: 'Match',
          handler: () => {

            this.navCtrl.push(BlackvanshoePage,{
                 val: 'jonathan'
              })

          }
        },
        {
          text: 'Delete ',
          handler: () => {
            //this.photos.splice(index,1);
            // this.photos.splice(index,1);
          }
        }
      ]
    });
  confirm.present();
  }

  loadShoes(){
    this.http.get('https://daydalus.herokuapp.com/pullShoes').map(res => res.json()).subscribe(data=> {
      this.photos = data;
    })
  }

  takePhoto(){
  //   const options: CameraOptions = {
  //   quality: 50,
  //   destinationType: this.camera.DestinationType.DATA_URL,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  const option: FileUploadOptions = {
    headers: {clothingType:'shoe'}
  }

  this.camera.getPicture().then((imageData) => {
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(imageData, 'https://daydalus.herokuapp.com/uploadShoe',option).then((data)=> {
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
  this.loadShoes();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoesPage');
  }

}
