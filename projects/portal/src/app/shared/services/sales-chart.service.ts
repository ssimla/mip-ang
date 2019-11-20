import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Raport } from './raport';

@Injectable({
  providedIn: 'root'
})
export class SalesChartService {

  private salesUrl = 'api/sales';

  constructor(private http: HttpClient) { }

  getSales(): Observable<Raport> {
  	return this.http.get<Raport>(this.salesUrl)
  		.pipe(
  			tap(data => console.log(data))
		)
  }
}
