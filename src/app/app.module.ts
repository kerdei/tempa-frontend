import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MeasurementListComponent} from  './measurement-list/measurement-list.component';
import { MeasurementService } from 'service/measurement-service.service';
import { ChartComponent } from './chart/chart.component';

 
@NgModule({
  declarations: [
    AppComponent,
    MeasurementListComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MeasurementService],
  bootstrap: [AppComponent]
})
export class AppModule { }