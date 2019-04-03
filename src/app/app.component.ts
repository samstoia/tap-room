import { Component } from '@angular/core';

import { Keg } from './models/keg.model';
import { isMaster } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tan & Sam\'s Tap Jam';

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Vanilla Oatis Oatmeal Stout', 'Ninkasi', 6, '7.0%', 'Stout'),
    new Keg('Space Dust IPA', 'Elysian', 5, '8.20%', 'IPA'),
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  sellPint(sellFromKeg) {
    sellFromKeg.pints--;
  }
}
