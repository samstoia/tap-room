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

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPintClicked(kegToSellFrom) {
    this.clickSellPint.emit(kegToSellFrom);
  }

  constructor() { }

  ngOnInit() {
  }
}
