import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log('Wgrałem komponent dashboards');
  }
  
  onEverySecond() { console.log('sekunda'); }
  onEveryFiveSeconds() { console.log('pięć sekund'); }

}
