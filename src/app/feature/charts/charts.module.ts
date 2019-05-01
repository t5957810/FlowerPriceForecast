import { NgModule } from '@angular/core';
import { ChartModule} from 'primeng/chart';
import { ChartsRoutingModule } from './charts-routing.module';
import { CommonSharedModule } from 'src/app/shared/modules/common-shared/common-shared.module';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [LineChartComponent],
  imports: [
    ChartModule,
    CommonSharedModule,
    ChartsRoutingModule,
  ]
})
export class ChartsModule { }
