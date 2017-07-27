import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact'
/**
 * Generated class for the ShirtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-shirt',
  templateUrl: 'shirt.html',
})
export class ShirtPage {
  public photos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController ) {
  }
  ngOnInit() {
    this.photos = [
      document.getElementsByClassName("redshirt")

    ];
  }

  deletePhoto(index){
    let confirm = this.alertCtrl.create({
      title: 'Find Match or Delete?',
      message: '',
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
            this.photos[index].style.display = "none"
            // this.photos.splice(index,1);
          }
        }
      ]
    });
confirm.present();
}

}
