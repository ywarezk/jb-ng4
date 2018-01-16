

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'snake'
})
export class SnakePipe implements PipeTransform  {
    public transform(value: string): string {
        let newString = '';
        for (let i=0; i<value.length; i++) {
            if (i % 2 === 0) {
                newString += value[i].toUpperCase();
            } else {
                newString += value[i].toLowerCase();
            }
        }
        return newString;
    }
}