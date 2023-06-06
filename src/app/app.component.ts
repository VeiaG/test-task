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
    .then(respone => {
      if(!respone.ok){
        throw Error("Помилка сервера");
      }
      return respone.json()
    })
    .then(currencyObj => {
      this.curArray = currencyObj;
      this.isFetched = true;
    });
  }
  
}
