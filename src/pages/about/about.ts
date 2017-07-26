//DATABASE
import { TodoServiceProvider } from './../../providers/todo-service/todo-service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { ClosetPage } from '../closet/closet';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  todos: Observable<any>;

  constructor(public navCtrl: NavController, public todoService:TodoServiceProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.loadTodos();
  }

loadTodos() {
  this.todos = this.todoService.getTodos();
}

load3(){
  this.navCtrl.push(ClosetPage,{
    val: 'anishnirmal'
  })
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

  load(){
    this.navCtrl.push(ContactPage,{
      val: 'anishnirmal'
    })
  }

}
