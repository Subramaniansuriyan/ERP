import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Invoice } from '../../../models/invoice.model';
import { ExcelService } from '../../../services/util/excel.service';
import {ItemDetails} from '../../../models/itemdetails.model';
import {ShippingDetails} from '../../../models/shipping.module';
import { OrderDetails} from '../../../models/order.model';
import * as XLSX from 'xlsx';
import { element } from 'protractor';
import { ThemeHorizontalComponent } from '../../layout/theme-horizontal/theme-horizontal.component';
import { MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';

export interface PeriodicElement {
  Marketplace: string;
  Orderdate: string;
  OrderNumber: string;
  Orderstatus:string;
  Updatedat: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 00:08:28", OrderNumber: "376835865652660", Orderstatus: "Completed", Updatedat: "02-04-2021 16:12:27"},
  {Marketplace: "Lazada Thailand (LazMall)", Orderdate: "01-04-2021 00:08:28", OrderNumber: "378147737444639", Orderstatus: "Completed", Updatedat: "03-04-2021 02:06:23"},
  {Marketplace: "Shopee Thailand (Shopee Thailand)", Orderdate: "01-04-2021 00:11:52", OrderNumber: "210331T9FSVRVS", Orderstatus: "Completed", Updatedat: "20-04-2021 10:07:33"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 00:25:58", OrderNumber: "376902208460092", Orderstatus: "Completed", Updatedat: "03-04-2021 18:10:41"},
  {Marketplace: "Lazada Thailand (LazMall)", Orderdate: "01-04-2021 00:26:02", OrderNumber: "378169508231528", Orderstatus: "Completed", Updatedat: "07-04-2021 12:10:49"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 00:32:16", OrderNumber: "376827090224160", Orderstatus: "Completed", Updatedat: "05-04-2021 14:53:56"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 00:34:31", OrderNumber: "378083188307014", Orderstatus: "Completed", Updatedat: "02-04-2021 14:07:48"},
  {Marketplace: "Shopee Thailand (Shopee Thailand)", Orderdate: "01-04-2021 00:41:39", OrderNumber: "210401TBWM306M", Orderstatus: "Completed", Updatedat: "17-04-2021 12:08:04"},
  {Marketplace: "Shopee Thailand (Shopee Thailand)", Orderdate: "01-04-2021 00:52:27", OrderNumber: "210401TEA3SHJB", Orderstatus: "Completed", Updatedat: "07-04-2021 12:16:48"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 01:04:55", OrderNumber: "376900017856432", Orderstatus: "Completed", Updatedat: "02-04-2021 18:10:50"},
  {Marketplace: "Shopee Thailand (Shopee Thailand)", Orderdate: "01-04-2021 01:09:13", OrderNumber: "210401TF8534T7", Orderstatus: "Completed", Updatedat: "17-04-2021 12:08:05"},
  {Marketplace: "Shopee Thailand (Shopee Thailand)", Orderdate: "01-04-2021 01:17:55", OrderNumber: "210401TFPW8AAJ", Orderstatus: "Completed", Updatedat: "03-04-2021 02:07:01"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 01:20:42", OrderNumber: "378112557640292", Orderstatus: "Completed", Updatedat: "02-04-2021 14:07:48"},
  {Marketplace: "Shopee Thailand (Shopee Thailand)", Orderdate: "01-04-2021 01:22:24", OrderNumber: "210401TEA6UBJ1", Orderstatus: "Completed", Updatedat: "03-04-2021 18:09:09"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 01:25:57", OrderNumber: "378106184768086", Orderstatus: "Completed", Updatedat: "03-04-2021 18:10:41"},
  {Marketplace: "Lazada Thailand (LazMall)", Orderdate: "01-04-2021 01:40:40", OrderNumber: "376919803637825", Orderstatus: "Completed", Updatedat: "16-04-2021 16:07:13"},
  {Marketplace: "Shopee Thailand (Shopee Thailand)", Orderdate: "01-04-2021 01:40:49", OrderNumber: "210401TGN59MFD", Orderstatus: "Completed", Updatedat: "11-04-2021 16:08:59"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 01:47:53", OrderNumber: "378157929602776", Orderstatus: "Completed", Updatedat: "02-04-2021 18:10:51"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 02:40:41", OrderNumber: "378142749889138", Orderstatus: "Completed", Updatedat: "02-04-2021 14:07:48"},
  {Marketplace: "Lazada Thailand (Lazada Thailand)", Orderdate: "01-04-2021 02:46:02", OrderNumber: "378102391296664", Orderstatus: "Completed", Updatedat: "02-04-2021 12:12:04"},

];


@Component({
  selector: 'date-wise',
  templateUrl: './date-wise.component.html',
  styleUrls: ['./date-wise.component.scss']
})
export class DateWiseComponent implements OnInit {
  exceltoJson = {};
  importInvoices: OrderDetails[] = [];
  exportInvoices = [];
  searchInvoices=[];
  orderdetailsData: OrderDetails[] =  [];
  itemdetailsData = [];
  shippingdetailsData = [];
  searchText: string;
  disp: string[];
  stat =  [];
  displayedColumns: string[] = ['Marketplace', 'Orderdate', 'OrderNumber', 'Check', 'Updatedat'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  pipe: DatePipe;

  page = 1;
  pageSize = 25;
  collectionSize: number; 
  isChecked = false;
  constructor(private excelSrv: ExcelService) { 
   
  }

  groupsave(event){
    this.searchInvoices =this.dataSource.filteredData
    console.log(this.searchInvoices)
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  getValues(event: string): any {
    this.searchInvoices = this.importInvoices.filter(item => item.OrderNumber === "Item");
  }

  refreshInvoices() {
    console.log(this.pageSize);
    this.searchInvoices = this.importInvoices
      .map((invoice, i) => ({id: i + 1, ...invoice}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
