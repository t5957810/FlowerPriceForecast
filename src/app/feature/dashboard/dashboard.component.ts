import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { PriceAnthuriumLo } from '../charts/model/interface/priceAnthuriumLo.interface';
import { tap } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource, Sort, MatSort } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  priceAnthuriumLo$: Observable<PriceAnthuriumLo[]>;
  dataSource;
  displayedColumns: string[] = ['d', 'market', 'avg_price', 'total_sell', 'year', 'week'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.priceAnthuriumLo$ = this.service.getAllPriceAnthurium().pipe(
      tap( (list: PriceAnthuriumLo[]) => {
        this.dataSource = new MatTableDataSource<PriceAnthuriumLo>(list);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
  }
}
