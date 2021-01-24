import { Component } from '@angular/core';

export interface PeriodicElement {
  date: string;
  venue: string;
  opponent: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '04.11.2020', venue: 'Camp Nou', opponent: 'Dynamo Kyiv'},
  {date: '21.11.2020', venue: 'Estadio Wanda Metropolitano', opponent: 'Atletico Madrid'},
  {date: '06.12.2020', venue: 'Estadio Ramón de Carranza', opponent: 'Cadiz'},
  {date: '30.12.2020', venue: 'Camp Nou', opponent: 'Eibar'},
];
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  displayedColumns: string[] = ['date', 'venue', 'opponent'];
  dataSource = ELEMENT_DATA;
}
