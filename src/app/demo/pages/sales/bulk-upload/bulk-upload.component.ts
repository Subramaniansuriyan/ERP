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
import { runInThisContext } from 'vm';
import { DatePipe } from '@angular/common'
import { copyFileSync } from 'fs';

@Component({
  selector: 'bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.scss'],
  providers: [DatePipe]
})
export class BulkUploadComponent implements OnInit {
  exceltoJson = {};
  importInvoices: OrderDetails[] = [];
  exportInvoices: OrderDetails[] = [];
  searchInvoices: OrderDetails[] = [];
  orderdetailsData: OrderDetails[] =  [];
  itemdetailsData = [];
  shippingdetailsData = [];
  searchText: string;
  disp: string[];
  stat =  [];
  date:Date;
  page = 1;
  pageSize = 25;
  collectionSize: number; 
  isChecked = false;
  checked = false;
  statusValidation = null;
  statusValidation_date = null;
  constructor(private excelSrv: ExcelService,public datepipe: DatePipe) { 
   
  }

  checkuncheckall()
  {
    if(this.isChecked == true)
    {
      this.isChecked = false;
    }
    else
    {
      this.isChecked = true;
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.pageSize = 5
  }

  isAllCheckBoxChecked() {
    console.log("here")
		return this.searchInvoices.every(p => p.Checked);
	}

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.excelSrv.importFromFile(bstr);

      const header = new OrderDetails()
      console.log(header)
      const importedData = data
      this.importInvoices = importedData
      this.searchInvoices = data.slice(0,5)
      this.collectionSize = this.importInvoices.length;
     
    };
    reader.readAsBinaryString(target.files[0]);

  }

  get_header_row(sheet) {
    var headers = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var C, R = range.s.r; /* start in the first row */
    /* walk every column in the range */
    for (C = range.s.c; C <= range.e.c; ++C) {
      var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })] /* find the cell in the first row */
      // console.log("cell",cell)
      var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
      if (cell && cell.t) {
        hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
    }
    return headers;
  }


  exportData(tableId: string) {
    this.excelSrv.exportToFile("Invoices", tableId);
  }

  getValues(event: string): any {
    this.searchInvoices = this.importInvoices.filter(item => item.OrderNumber === "Item");
  }

  refreshInvoices() {
    this.searchInvoices = this.importInvoices
      .map((invoice, i) => ({id: i + 1, ...invoice}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  groupsave(){
    this.date = new Date()
    let latest_date =this.datepipe.transform(this.date, 'dd-MM-yyyy');
    let other_data = this.importInvoices.filter(item => item['Order status'] !== "Completed" && item['Order status'] !=="Returned")
    if (other_data.length > 0){
      this.statusValidation ="Please check the order status upload the correct excel";
    }else{
      this.statusValidation = null;
      console.log(this.importInvoices)
    }
    let o_date = this.importInvoices.filter(item => item['Order date'] > latest_date)
    if (o_date.length > 0){
      this.statusValidation_date ="Please check the order date upload the correct excel";
    }else{
      this.statusValidation_date = null;
      console.log(this.importInvoices)
    }
    
  }

  onCheckboxchange(event,od_number){
    let selected = [];
    if (event.target.checked === true){
      Object.entries(this.searchInvoices).forEach(([key, value]) => {
        if(value['Order Number']!== od_number){
          this.searchInvoices[key].checked = false;
        }
      });
      let data = this.importInvoices.filter(item => item['Order Number'] === od_number);
      for (var i = 0; i < data.length; i++) {
        selected.push(data[i])
        this.itemdetailsData = selected
        this.shippingdetailsData = selected
      }
    }
    if (event.target.checked === false){
      this.itemdetailsData = this.itemdetailsData.filter(item => item['Order Number'] !== od_number)
      this.shippingdetailsData = this.shippingdetailsData.filter(item => item['Order Number'] !== od_number)
    }
  }
}
