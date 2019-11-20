import { Component, OnInit } from '@angular/core';
import { SalesChartService } from './../../shared/services/sales-chart.service';
import { Raport } from './../../shared/services/raport';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(private salesChartService: SalesChartService) { }

  public barChartType: string;
  public barChartLabels: string[] = [
  	'2006',
  	'2007',
  	'2008',
  	'2009',
  	'2010',
  	'2011',
  	'2012',
  	'2006',
  	'2007',
  	'2008',
  	'2009',
  	'2010',
  	'2011',
  	'2012'
  ];
  public barChartOptions: any = {
  	scaleShowVerticalLines: false,
  	responsive: true
  };
  public barChartLegend: boolean = false;
  public barChartData: any[] = [
  	{
  		data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40], label: 'Seria A'
  	}
  ]

  public chartJsonData: string;
  public chartTitle: string = 'Domyślny';
  salesRaport: Raport;

  ngOnInit() {
  	this.barChartType = 'bar';
  	this.getSalesBarChartData();
  }

  getSalesBarChartData(): void {
  	this.salesChartService.getSales()
  		.subscribe(raport => {
  			this.salesRaport = raport;
  		});
  }

}
