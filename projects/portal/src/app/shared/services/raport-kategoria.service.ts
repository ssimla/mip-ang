import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { RaportKategoria } from './raportkategoria';

@Injectable({
  providedIn: 'root'
})

export class RaportKategoriaService {

  url = 'http://mip/testy/admin/api.php/collector/portal/dashboard';

  constructor(private http: HttpClient) {}

  getRaportCategories(): Observable<RaportKategoria[]> {
  	return this.http.get<RaportKategoria[]>(this.url)
  		.pipe(
  			tap()
		)
  }


}
