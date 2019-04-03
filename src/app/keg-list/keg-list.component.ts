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

  // kegIsLow = null;

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPintClicked(kegToSellFrom) {
    this.clickSellPint.emit(kegToSellFrom);
  }

  sellGrowlerClicked(kegToSellFrom) {
    this.clickSellGrowler.emit(kegToSellFrom);
  }

  lowKeg() {
    this.childKegList.forEach(function(i){
      if (i.pints <= 10) {
        alert('A keg is low!!!');
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }
}
