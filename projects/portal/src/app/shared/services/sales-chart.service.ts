import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Raport } from './raport';

@Injectable({
  providedIn: 'root'
})
export class SalesChartService {

  url = 'http://mip/admin/api.php/drawings/sales';

  constructor(private http: HttpClient) { }

  getSales(): Observable<Raport> {
  	return this.http.get<Raport>(this.url)
  		.pipe(
  			tap(data => console.log(data))
		)
  }
}
