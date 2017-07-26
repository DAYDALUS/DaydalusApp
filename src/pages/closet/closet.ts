import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about'
import { HatsPage } from '../hats/hats';
import { PantsPage } from '../pants/pants';
import { ShirtPage } from '../shirt/shirt';
import { ShoesPage } from '../shoes/shoes';
/**
 * Generated class for the ClosetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-closet',
  templateUrl: 'closet.html',
})
export class ClosetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

   openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

  Shirt(){
    this.navCtrl.push(ShirtPage,{
      val: 'anishnirmal'
    })
  }
  Hat(){
    this.navCtrl.push(HatsPage,{
      val: 'anishnirmal'
    })
  }
  Pant(){
    this.navCtrl.push(PantsPage,{
      val: 'anishnirmal'
    })
  }
  Shoe(){
    this.navCtrl.push(ShoesPage,{
      val: 'anishnirmal'
    })
  }


    searchQuery: string = '';
    items: string[];

    initializeItems() {
      this.items = [
        'Shirt',
        'Pants',
        'Hat',
        'Socks',

      ];}


  load(){
    this.navCtrl.push(AboutPage,{
      val: 'anishnirmal'
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClosetPage');
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
// }
// export class SearchPage {
//
//   searchQuery: string = '';
//   items: string[];
//
//   constructor() {
//     this.initializeItems();
//   }
//
//   initializeItems() {
//     this.items = [
//       'Amsterdam',
//       'Bogota',
//
//     ];}
//
//
//   getItems(ev: any) {
//     // Reset items back to all of the items
//     this.initializeItems();
//
//     // set val to the value of the searchbar
//     let val = ev.target.value;
//
//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
//       this.items = this.items.filter((item) => {
//         return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//       })
//     }
//   }
// }
