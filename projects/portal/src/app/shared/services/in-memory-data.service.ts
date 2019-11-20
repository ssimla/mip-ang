import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Raport } from './raport';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

  	const salesRecords : Record[] = [
	  	{"wartoscX":"Paź","wartoscY":60.6},
	  	{"wartoscX":"Lis","wartoscY":59.8},
	  	{"wartoscX":"Gru","wartoscY":57.1},
	  	{"wartoscX":"Sty","wartoscY":40},
	  	{"wartoscX":"Lut","wartoscY":49.5},
	  	{"wartoscX":"Mar","wartoscY":70.4},
	  	{"wartoscX":"Kwi","wartoscY":76.5},
	  	{"wartoscX":"Maj","wartoscY":70.5},
	  	{"wartoscX":"Cze","wartoscY":58.4},
	  	{"wartoscX":"Lip","wartoscY":81.2},
	  	{"wartoscX":"Sie","wartoscY":51.1},
	  	{"wartoscX":"Wrz","wartoscY":52.6},
	  	{"wartoscX":"Paź","wartoscY":45.1},
	  	{"wartoscX":"Lis","wartoscY":32.2}
  	];

  	const sales: Raport = 
  		{
	  		"id": "1",
			"data": "2019-11-19",
			"kategoria": "wykres",
			"tytul": "Sprzedaż kredytu konsumpcyjnego w 2018/19 r",
			"tresc": salesRecords
		};

  	// let returnType = 'object';
  	let returnType = 'observable';

  	const db = { sales };

  	switch (returnType) {
  		case 'observable':
  			return of(db).pipe(delay(2000));
  		default:
  			return db;
  	}
  }
}
