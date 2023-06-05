import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curArray: any = null;
  isFetched: boolean = false;
  ngOnInit(){
    fetch("https://api.monobank.ua/bank/currency")
    .then(respone => respone.json())
    .then(currencyObj => {
      console.log(currencyObj)
      this.curArray = currencyObj;
      this.isFetched = true;
    });
  }
  
}
