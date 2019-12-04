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
	  	{"wartoscX":"Paź","wartoscY":{"sales":60.6}},
	  	{"wartoscX":"Lis","wartoscY":{"sales":59.8}},
	  	{"wartoscX":"Gru","wartoscY":{"sales":57.1}},
	  	{"wartoscX":"Sty","wartoscY":{"sales":40}},
	  	{"wartoscX":"Lut","wartoscY":{"sales":49.5}},
	  	{"wartoscX":"Mar","wartoscY":{"sales":70.4}},
	  	{"wartoscX":"Kwi","wartoscY":{"sales":76.5}},
	  	{"wartoscX":"Maj","wartoscY":{"sales":70.5}},
	  	{"wartoscX":"Cze","wartoscY":{"sales":58.4}},
	  	{"wartoscX":"Lip","wartoscY":{"sales":81.2}},
	  	{"wartoscX":"Sie","wartoscY":{"sales":51.1}},
	  	{"wartoscX":"Wrz","wartoscY":{"sales":52.6}},
	  	{"wartoscX":"Paź","wartoscY":{"sales":45.1}},
	  	{"wartoscX":"Lis","wartoscY":{"sales":32.2}}
  	];

  	const salesRaport: Raport = 
  		{
	  		"id": "1",
			"data": "2019-11-19",
			"kategoria": "wykres",
			"tytul": "Sprzeda\u017C kredytu konsumpcyjnego w 2018/19 r",
			"tresc": salesRecords
		};
	const chart = {
		"sales" : salesRaport,
		"categories" : salesRecords
	}

	const dashboard : any = {
		"raports" : "",
		"categories" : ""
	}

  	// let returnType = 'object';
  	let returnType = 'observable';

  	const db = { dashboard, chart };

  	switch (returnType) {
  		case 'observable':
  			return of(db).pipe(delay(2000));
  		default:
  			return db;
  	}
  }
}
