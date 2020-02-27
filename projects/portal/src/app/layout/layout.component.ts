import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, group, animateChild } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('DashboardPage <=> RaportsPage', [
        style({position: 'relative'}),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            })
          ]),
        query(':enter',[
          style({
            left: '-1000%'
          })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ left: '100%'}))
          ]),
          query(':enter', [
            animate('500ms ease-out', style({ left: '0%'}))
          ])
        ]),
        query(':enter', animateChild())
      ])
    ])
  ]
})
export class LayoutComponent implements OnInit {

  public collapsedSideBar: boolean;

  constructor() { }

  ngOnInit() {
  }

  receiveCollapsed($event) {
  	this.collapsedSideBar = $event;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
