import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Raport } from './raport';

@Injectable({
  providedIn: 'root'
})
export class SalesChartService {

  url = 'http://mip/testy/admin/api.php/collector/portal/chart';
  // url = 'api/chart';

  constructor(private http: HttpClient) { }

  getSales(): Observable<Raport> {
  	return this.http.get<Raport>(this.url)
  		.pipe(
  			tap(data => console.log(data)),
        delay(3000)
		)
  }
}
