import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg-form',
  templateUrl: './new-keg-form.component.html',
  styleUrls: ['./new-keg-form.component.css']
})
export class NewKegFormComponent implements OnInit {
  @Input() newKegList: Keg[];
  showAddKeg = null;
  addKeg(name: string, brand: string, price: string, abv: string, style: string) {
    const priceNum = parseInt(price);
    const newKeg = new Keg(name, brand, priceNum, abv, style);
    this.newKegList.push(newKeg);
  }

  showAddKegForm() {
    this.showAddKeg = true;
  }

  hideAddKegForm() {
    this.showAddKeg = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
