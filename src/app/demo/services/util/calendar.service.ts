import { Injectable } from '@angular/core';

@Injectable()
export class FilterPanelService {

  filterdata: any[];
  constructor() { }

   get data(): any{
    return this.filterdata;
  }

  set data(val: any){
    this.filterdata = val;
    console.log(this.filterdata);
  }

}