import { Component, OnInit } from '@angular/core';
import { Measurement } from '../measurement';
import { MeasurementService } from 'service/measurement-service.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css']
})
export class MeasurementListComponent implements OnInit {

  chart: [];
  measurements: Measurement[];
 
  constructor(private measurementService: MeasurementService) {
  }
 
  ngOnInit() {
    this.measurementService.findAll().subscribe(data => {
      this.measurements = data;
    });

  }

}
