import { Component, OnInit } from '@angular/core';
import { RaportKategoriaService } from './../../shared/services/raport-kategoria.service';
import { RaportKategoria } from './../../shared/services/raportkategoria';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public raportyKategorie: RaportKategoria[]; 	

  constructor(private raportKategoriaService: RaportKategoriaService) { }

  ngOnInit() {
  	this.getRaportyKategorie();
  }

  getRaportyKategorie() {
    this.raportKategoriaService.getRaportCategories()
      .subscribe((r: any) => {
      	this.raportyKategorie = r.data.categories;
      });
  }

  countRaportsWithCategory(categories: number[]) : number {
  	let filteredArray = this.raportyKategorie.filter(
  		function(raportKategoria: RaportKategoria) {
  			return this.indexOf(+raportKategoria.ID_KATEGORII) >= 0;
  		},
  		categories
	);
  	return filteredArray.length;
  }
  
  linkClicked() {
  	console.log("Link clicked!");
  }


  
  // onEverySecond() { console.log('sekunda'); }
  // onEveryFiveSeconds() { console.log('pięć sekund'); }

}
