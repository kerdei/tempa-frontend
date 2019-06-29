import { Component, OnInit } from '@angular/core';
import { Measurement } from '../measurement';
import { MeasurementService } from 'service/measurement-service.service';


@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css']
})
export class MeasurementListComponent implements OnInit {


  measurements: Measurement[];

  constructor(private measurementService: MeasurementService) {
  }

  ngOnInit() {
    this.measurementService.findAll().subscribe(data => {
      this.measurements = data;
    });

  }

}
