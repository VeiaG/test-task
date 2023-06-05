import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() curArray : any;
  @Input() isFetched: boolean = false;
  
  findCurrency( code : number){
    return this.isFetched ? this.curArray.find( (item: any) => item.currencyCodeA === code).rateBuy : 0;
  };
  ngOnInit(){

  }

}
