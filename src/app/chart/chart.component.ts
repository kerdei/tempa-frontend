import { Component, OnInit } from '@angular/core';
import { MeasurementService } from 'service/measurement-service.service';
import { Chart } from 'chart.js';
import { format } from 'util';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart: [];
  values: number[] = [];
  dates: string[] = [];


  constructor(private measurementService: MeasurementService) {
  }
  ngOnInit() {
    this.measurementService.findAll().subscribe(data => {

      data.forEach(measurement => {
        this.values.push(measurement.value);
        this.dates.push(measurement.date.substr(measurement.date.indexOf('T') + 1, 5));
      });
      
      this.chart = new Chart("measurmentChart", {
        type: 'line',
        data: {
          labels: this.dates,
          datasets: [{
            lineTension: 0.1,
            fill: false,
            label: 'Measurments',
            data: this.values,
          }]
        },
        options: {
          title: {
            display: true,
            text: "Measurments"
          },
          legend: {
            display: false
          }
        }
      });

    });

  }



}
