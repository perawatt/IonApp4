import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ParseDataProvider {
    constructor() { }

    public ConvertFormGropuValueToNumber(fg: FormGroup, names: string[]) {
        names.forEach((name:string)=>{
            var convertedValue = Number.parseFloat(this.InputToDecimal(fg.get(name).value));
            fg.get(name).setValue(convertedValue);
        })
    }

    public ParseToTwoDecimal(value: number): number {
        if (value != null)
            return Number.parseFloat(this.InputToDecimal(value.toString()));
        else return 0;
    }

    public InputToDecimal(val: string) {
        if (val != null) {
            var splited = val.split(".", 2);
            if (splited[1] != null && splited[1].length > 1) {
                splited[1] = splited[1].substring(0, 2);
                let amount2Decimal = splited[0].concat('.', splited[1]);
                return amount2Decimal;
            }
            return val;
        }
    }
}
