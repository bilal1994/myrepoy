import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { AdminPage } from '../admin/admin';
import { FamilyPage } from '../family/family';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AdminPage;
  tab4Root = FamilyPage;

  constructor() {

  }
}
