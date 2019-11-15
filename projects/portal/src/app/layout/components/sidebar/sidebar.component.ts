import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  isActive: boolean;
  collapsed: boolean;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  	this.isActive = false;
  	this.collapsed = false;
  }

  toggleCollapsed() {
  	this.collapsed = !this.collapsed;
  	this.collapsedEvent.emit(this.collapsed);
  }

}
