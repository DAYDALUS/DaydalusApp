import { Component } from '@angular/core';
import { ClosetPage } from '../closet/closet';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ClosetPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
