import { Component } from '@angular/core';

import { Keg } from './models/keg.model';

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
    new Keg('The Tan', 'Tan', 7, '9.0%', 'Stout'),
    new Keg('The Sam', 'Sam', 2, '3.5%', 'Lager'),
    new Keg('Marshmellow Stout', 'King Beers', 6, '7.0%', 'Stout'),
    new Keg('Blue Dabadeedabadie', 'Weirdo\'s Inc', 4, '5.5%', 'Lager'),
    new Keg('THE JAM', 'Tan & Sam', 25, '99.9%', 'Stout'),
    new Keg('Froth God', 'King Beers', 5, '5.5%', 'IPA')
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  sellPint(sellFromKeg) {
    if (sellFromKeg.pints > 0) {
      sellFromKeg.pints --;
    } else {
      sellFromKeg.pints = 'EMPTY';
    }
  }

  sellGrowler(sellFromKeg) {
    if (sellFromKeg.pints > 0) {
      sellFromKeg.pints -= 2;
    } else {
      sellFromKeg.pints = 'EMPTY';
    }
  }

  refillKeg(currentKeg) {
    currentKeg.pints = 124;
  }
}
