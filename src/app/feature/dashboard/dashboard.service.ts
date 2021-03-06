import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceAnthuriumLo } from '../charts/model/interface/priceAnthuriumLo.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = 'assets/price_Anthurium.json';

  constructor(private http: HttpClient) { }
  getAllPriceAnthurium(): Observable<PriceAnthuriumLo[]> {
    return this.http.get<PriceAnthuriumLo[]>(this.apiUrl);
  }
}
