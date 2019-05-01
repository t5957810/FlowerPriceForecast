import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PriceAnthuriumLo } from './model/interface/priceAnthuriumLo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  apiUrl = 'assets/price_Anthurium.json';
  constructor(private http: HttpClient) {}

  getAllPriceAnthurium(): Observable<PriceAnthuriumLo[]> {
    return this.http.get<PriceAnthuriumLo[]>(this.apiUrl);
  }
}
