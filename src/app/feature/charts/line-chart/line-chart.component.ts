import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { Observable } from 'rxjs';
import { PriceAnthuriumLo } from '../model/interface/priceAnthuriumLo.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  data: any;
  barData: any;
  options: any;
  priceAnthuriumLo$: Observable<PriceAnthuriumLo[]>;
  constructor(private service: ChartService) {}

  ngOnInit() {
    this. priceAnthuriumLo$ = this.service.getAllPriceAnthurium().pipe(
      tap( (list: PriceAnthuriumLo[]) => {

      })
    );
    this.data = {
      labels: ['2018/1/1', '2018/1/2', '2018/1/3', '2018/1/4', '2018/1/5', '2018/1/6', '2018/1/7', '2018/1/8'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };

    this.barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }
}
