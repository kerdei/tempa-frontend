import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: 'measurements', component: MeasurementListComponent,
  },
  { path: 'chart', component: ChartComponent,
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }