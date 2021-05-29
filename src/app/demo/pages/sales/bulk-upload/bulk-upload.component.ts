import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Invoice } from '../../../models/invoice.model';
import { ExcelService } from '../../../services/util/excel.service';
import {ItemDetails} from '../../../models/itemdetails.model';
import {ShippingDetails} from '../../../models/shipping.module';
import { OrderDetails} from '../../../models/order.model';
import * as XLSX from 'xlsx';
import { element } from 'protractor';

@Component({
  selector: 'bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.scss']
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

  page = 1;
  pageSize = 25;
  collectionSize: number; 
  isChecked = false;
  constructor(private excelSrv: ExcelService) { 
   
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
   
   /* for (let index = 0; index < 10; index++) {
      const invoice = new Invoice();
      invoice.invoiceno = faker.invoiceno;
      invoice.grdate = faker.phone.phoneNumber();
      invoice.invoicedate = faker.internet.email();
      invoice.wareocode = faker.address.streetAddress();
      invoice.cbm = faker.address.streetAddress();
      invoice.purchaseqty = faker.address.streetAddress();
      invoice.unitprice = faker.address.streetAddress();
      invoice.exchvalue = faker.address.streetAddress();
      invoice.customs = faker.address.streetAddress();
      invoice.customduty = faker.address.streetAddress();
      this.exportInvoices.push(invoice);
    }*/
  }

  isAllCheckBoxChecked() {
		return this.searchInvoices.every(p => p.Checked);
	}

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.excelSrv.importFromFile(bstr);

      const header: string[] = Object.getOwnPropertyNames(new OrderDetails());
      const importedData = data
      this.importInvoices = importedData
      
      // this.importInvoices = importedData.map(arr => {
      //   const obj = {};
      //   for (let i = 0; i < header.length; i++) {
      //     const k = header[i];
      //     obj[k] = arr[i];
      //     // console.log(obj)
      //   }
      //   return <OrderDetails>obj;
      // })
      
      this.searchInvoices = data   
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
    console.log(this.pageSize);
    this.searchInvoices = this.importInvoices
      .map((invoice, i) => ({id: i + 1, ...invoice}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  onCheckboxchange(input: HTMLInputElement,od_number){
    if (input.checked === true){
      let data = this.importInvoices.filter(item => item['Order Number'] === od_number);
      for (var i = 0; i < data.length; i++) {
        this.itemdetailsData.push(data[i])
        this.shippingdetailsData.push(data[i])
      }
    }
    if (input.checked === false){
      this.itemdetailsData = this.itemdetailsData.filter(item => item['Order Number'] !== od_number)
      this.shippingdetailsData = this.shippingdetailsData.filter(item => item['Order Number'] !== od_number)
  }
}
}
