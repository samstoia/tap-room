import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "emptyKeg",
  pure: false
})

export class EmptyKegPipe implements PipeTransform {
  transform(input: Keg[]) {
    let output: Keg[] = [];
    for (let i=0; i<input.length; i++){
      if (input[i].pints != 0) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
