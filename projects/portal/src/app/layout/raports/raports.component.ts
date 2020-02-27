import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-raports',
  templateUrl: './raports.component.html',
  styleUrls: ['./raports.component.scss'],
  animations: [
  	trigger('openClose', [
  			state('open', style({
	  				height: '200px',
	  				opacity: 1,
	  				backgroundColor: 'yellow'
	  			})),
  			state('closed', style({
  					height: '100px',
  					opacity: 0.5,
  					backgroundColor: 'green'
  				})),
  			transition('open => closed', [
  				animate('6s')]),
  			transition('closed => open', [
  				animate('0.5s')]),
			]
	),
	trigger('openClose1', [
  			state('true', style({
	  				height: '200px'
	  			})),
  			state('false', style({
  					height: '100px'
  				})),
  			transition('false <=> true', 
  				animate('0.5s')),
			]
	),
	trigger('myInsertRemoveTrigger', [
			transition(':enter', [
				style({opacity: 0}),
				animate('6s')
				]),
			transition(':leave', [
				animate('2s', style({opacity: 0}))
				]),
	]),

  ]
})
export class RaportsComponent implements OnInit {
  
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
  	this.isOpen = !this.isOpen;
  }


}
