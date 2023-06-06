import { Component ,Input} from '@angular/core';
@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.scss']
})
export class CurrencyCalculatorComponent {
  @Input() curArray : any;
  @Input() isFetched: boolean = false;

    firstCurrency:string = "980";
    secondCurrency:string = "840";

    firstValue: number = 0;
    secondValue: number = 0;
    round(item: number){
      return Math.round((item + Number.EPSILON) * 1000) / 1000;
    }
    findCurrency( code1 : number , code2 : number){
      return this.curArray.find( (item: any) => item.currencyCodeA === code1 && item.currencyCodeB === code2);
    };
    valueChange(c1:string , c2: string , isFirst: boolean){
      if(this.isFetched){
        this.firstValue = parseFloat(c1);
        this.secondValue = parseFloat(c2);

        const curCurrency = this.findCurrency(parseInt(this.firstCurrency),parseInt(this.secondCurrency)) ||this.findCurrency(parseInt(this.secondCurrency),parseInt(this.firstCurrency)) ;
        
        let sellPrice = curCurrency ? curCurrency.currencyCodeB == this.secondCurrency ? curCurrency.rateSell: curCurrency.rateBuy : 1;
        if(isFirst){
          this.secondValue = this.round((this.firstValue/sellPrice));
        }else{
          this.firstValue = this.round(this.secondValue *sellPrice);
        }
        
      }
    }
}
