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

  showSpinner: boolean = true;

  public barChartType: string;
  public barChartLabels: string[];
  public barChartOptions: any = {
  	scaleShowVerticalLines: false,
  	responsive: true
  };
  public barChartLegend: boolean = false;
  public barChartData: any[];
  public chartTitle: string;
  public salesRaport: any;

  ngOnInit() {
  	this.barChartType = 'bar';
  	this.getSalesBarChartData();
  }

  getSalesBarChartData(): void {
  	this.salesChartService.getSales()
  		.subscribe((r: Raport) => {
  			
        this.showSpinner = false;
  		  this.salesRaport = r.data;
        this.chartTitle = this.salesRaport.tytul;

        let barChartSalesSerie = this.salesRaport.tresc.map(function(x) {
          return x.wartoscY;
        });
        this.barChartLabels = this.salesRaport.tresc.map(function(x) {
          return x.wartoscX;
        });
        this.barChartData = [
          {
            data: barChartSalesSerie, label: this.salesRaport.tytul
          }
        ];
        //this.chartJsonData = JSON.stringify(this.salesRaport);
  		});
  }

}
