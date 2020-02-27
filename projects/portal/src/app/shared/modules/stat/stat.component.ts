import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
  outputs: ['everySecond', 'fiveSecs:everyFiveSeconds'],
  inputs: ['icon', 'bgClass', 'count', 'label']
})
export class StatComponent implements OnInit {
  icon: string;
  bgClass: string;
  count: number;
  label: string;
  // everySecond: EventEmitter<any> = new EventEmitter<string>();
  // fiveSecs: EventEmitter<any> = new EventEmitter<string>();

  constructor() { 
      // setInterval(
      //   () => this.everySecond.emit('ewencik jednosekundowy'),
      //   1000);
      // setInterval(
      //   () => this.fiveSecs.emit('ewencik 5 sekundowy'),
      //   5000);
   }

  ngOnInit() {
  }

}
