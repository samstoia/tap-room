import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "filterByUserSort",
  pure: false
})

export class FilterByUserSortPipe implements PipeTransform {
  transform(input: Keg[], desiredSort) {
    let output: Keg[] = [];
    if(desiredSort === 'Stout') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].style === 'Stout') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSort === 'IPA') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].style === 'IPA') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSort === 'Lager') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].style === 'Lager') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSort === 'Price') {
      const sortedByPrice = input.sort((a, b) => (a.price > b.price) ? 1 : -1);
      return sortedByPrice;
    } else {
      return input;
    }
  }
}
