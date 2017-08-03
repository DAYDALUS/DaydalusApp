import { TodoServiceProvider } from './../../providers/todo-service/todo-service';
import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about'
import { HatsPage } from '../hats/hats';
import { PantsPage } from '../pants/pants';
import { ShirtPage } from '../shirt/shirt';
import { ShoesPage } from '../shoes/shoes';
import { Observable } from 'rxjs/Observable';
import { DirtypPage } from '../dirtyp/dirtyp';
import { DirtysPage } from '../dirtys/dirtys';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';




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
    todos: Observable<any>;
    public photos: any;
    public base64Image: string;
    pet: string = "clean";
    splash = true;
    //secondPage = SecondPagePage

  constructor(public navCtrl: NavController, public navParams: NavParams,public todoService:TodoServiceProvider, private alertCtrl: AlertController, public toastCtrl: ToastController,private camera: Camera, private transfer: FileTransfer)
  {
    this.initializeItems();
    //this.pet = "clean";
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
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

  loadTodos() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
      let prompt = this.alertCtrl.create({
        title: 'Dirty Clothes',
        message: "Clothes you have to wash now...",
        inputs: [
          {
            name: 'text',
            placeholder: 'Remember to delete clothes that are clean!'
          },
        ],
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: 'Save',
            handler: data => {
              this.todoService.addTodo(data.text).subscribe(data => {
                this.showToast(data.msg);
                this.loadTodos();
              });
            }
          }
        ]
      });
      prompt.present();
    }

    removeTodo(id) {
      this.todoService.deleteTodo(id).subscribe(data =>{
        this.showToast(data.msg);
        this.loadTodos();
      //  duration:3000
      });
    //  toast.present();
    }

    private showToast(message: string) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
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
  DirtyShirt(){
    this.navCtrl.push(DirtysPage,{
      val: 'anishnirmal'
    })
  }
  DirtyPant(){
    this.navCtrl.push(DirtypPage,{
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
