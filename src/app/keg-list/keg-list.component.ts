import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSellPint = new EventEmitter();
  @Output() clickSellGrowler = new EventEmitter();
  @Output() clickRefillKeg = new EventEmitter();

  kegIsLow = null;
  lowKegs: Keg[] = [];
  filterByUserSort: string = 'All';

  onChange(optionFromMenu) {
    this.filterByUserSort = optionFromMenu;
  }

  refillKegClicked(currentKeg) {
    this.clickRefillKeg.emit(currentKeg);
  }

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPintClicked(kegToSellFrom) {
    this.clickSellPint.emit(kegToSellFrom);
  }

  sellGrowlerClicked(kegToSellFrom) {
    this.clickSellGrowler.emit(kegToSellFrom);
  }

  pushLowKegToArray(currentKeg) {
    if (currentKeg.pints < 10) {
      this.lowKegs = [currentKeg];
      this.kegIsLow = true;
      console.log(this.lowKegs);
    }
  }

  hideWarning(lowKeg) {
  if (lowKeg.pints === 124) {
    this.kegIsLow = null;
    }
  }
  constructor() { }

  ngOnInit() {
  }
}
