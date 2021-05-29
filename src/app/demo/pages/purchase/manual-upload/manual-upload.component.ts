import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Invoice } from '../../../models/invoice.model';
import { ExcelService } from '../../../services/util/excel.service';


@Component({
  selector: 'manual-upload',
  templateUrl: './manual-upload.component.html',
  styleUrls: ['./manual-upload.component.scss']
})
export class ManualUploadComponent implements OnInit {

  importInvoices: Invoice[] = [];
  exportInvoices: Invoice[] = [];
  searchInvoices: Invoice[] = [];
  searchText: string;
  disp: string[];
  
  constructor(private excelSrv: ExcelService) { }

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

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.excelSrv.importFromFile(bstr);

      const header: string[] = Object.getOwnPropertyNames(new Invoice());
      const importedData = data.slice(1, -1);
      importedData.length;

      this.importInvoices = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return <Invoice>obj;
      })
      this.searchInvoices = this.importInvoices 

    };
    reader.readAsBinaryString(target.files[0]);

  }

  exportData(tableId: string) {
    this.excelSrv.exportToFile("Invoices", tableId);
  }

  getValues(event: string): any {
    this.searchInvoices = this.importInvoices.filter(item => item.wareocode === "Item");
  }

}

