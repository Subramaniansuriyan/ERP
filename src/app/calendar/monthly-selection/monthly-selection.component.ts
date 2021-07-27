import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import * as range from 'lodash.range';
import { WeeklySelectionComponent } from '../weekly-selection/weekly-selection.component';


export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
}

@Component({
  selector: 'app-monthly-selection',
  templateUrl: './monthly-selection.component.html',
  styleUrls: ['./monthly-selection.component.scss']
})
export class MonthlySelectionComponent implements OnInit {
  public currentDate: moment.Moment;
  // public namesOfDays = ['Jan', 'Feb', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public weeks: Array<CalendarDate[]> = [];
  public months:Array<CalendarDate[]> = [];

  public selectedDate;
  public show: boolean;

  @ViewChild('calendar', {static: true}) calendar;

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.show = false;
    }
  }

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
    this.currentDate = moment();
    this.selectedDate = moment(this.currentDate).format('MM/YYYY');
    this.generateCalendar();
  }

  private generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    // console.log(dates)
    const weeks = [];
    const checks = [];
    while (dates.length > 0) {
      // for(var val of dates){
      //   let check = moment(val.mDate).format('MMM')
      //   checks.push(check)
      // }
      weeks.push(dates.splice(0, 12));
    }
    this.weeks = weeks;
    this.months =checks
    console.log(weeks)
  }

  private fillDates(currentMoment: moment.Moment) {
    const firstmonthofyear = moment(currentMoment).startOf('year').month()
    const lastmonthofyear = moment(currentMoment).endOf('year').month()

    const firstMonthofGrid=moment(currentMoment).startOf('year').subtract(firstmonthofyear, 'month')
    const lastMonthofGrid =moment(currentMoment).endOf('year').subtract(lastmonthofyear, 'month').add(12, 'month')

    const startCalendar = firstMonthofGrid.month();

    return range(startCalendar, startCalendar + lastMonthofGrid.diff(firstMonthofGrid, 'month')).map((date) => {
      const newDate = moment(firstMonthofGrid).month(date);
      const newmonth = moment(firstMonthofGrid).month(date).format('MMM');
      // console.log(newmonth)
      
      return {
        today: this.isToday(newDate),
        selected: this.isSelected(newDate),
        mDate: newDate,
        test:newmonth
      };
    });
  }

  public prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'year');
    this.generateCalendar();
  }

  public nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'year');
    this.generateCalendar();
  }

  public isDisabledMonth(currentDate): boolean {
    const today = moment();
    return moment(currentDate).isBefore(today, 'year');
  }

  private isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'month');
  }

  private isSelected(date: moment.Moment): boolean {
    return this.selectedDate === moment(date).format('MM/YYYY');
  }

  public isSelectedMonth(date: moment.Moment): boolean {
    const today = moment();
    return moment(date).isSame(this.currentDate, 'month') && moment(date).isSameOrBefore(today);
  }

  public selectDate(date: CalendarDate) {
    this.selectedDate = moment(date.mDate).format('MM/YYYY');

    this.generateCalendar();
    this.show = !this.show;
  }
}
