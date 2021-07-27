import { Component, OnInit,Input } from '@angular/core';
import { ChartDB } from '../../../fack-db/chart-data';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import { CalendarOptions } from '@fullcalendar/angular';


import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-dash-analytics',
  templateUrl: './newdash-analytics.component.html',
  styleUrls: ['./newdash-analytics.component.scss']
})
export class NewDashAnalyticsComponent implements OnInit {
  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;
  public sales_category:any;
  private selectedLink: string;

  constructor(public apexEvent: ApexChartService) {
    this.chartDB = ChartDB;
  }

  ngOnInit() {
    
  }

  sales_pie(){
    this.sales_category = this.chartDB.pie1CAC
    return this.sales_category;
   }
 
  sales_bar(){
   this.sales_category = this.chartDB.bar4CAC
   return this.sales_category;
  }

  onItemChange(value){
    console.log(" Value is : ", value );
    this.selectedLink = value;
    // window.location.reload();  
  }

  isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
          return false;  
  }     

        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    } 

}


// export class NewDashAnalyticsComponent implements OnInit {
//   // Pie
//   public pieChartLabels:string[] = ['Chrome', 'Safari', 'Firefox','Internet Explorer','Other'];
//   public pieChartData:number[] = [40, 20, 20 , 10,10];
//   public pieChartType:string = 'pie';
 
//   // events
//   public chartClicked(e:any):void {
//     console.log(e);
//   }
 
//   public chartHovered(e:any):void {
//     console.log(e);
//   }
// }