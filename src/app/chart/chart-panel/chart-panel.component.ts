import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.css']
})
export class ChartPanelComponent implements OnInit {
  chartParam = [];
  option: Options = {
    floor: -0.2,
    ceil: 0.2,
    step: 0.01,
    showTicks: true
  };

  @Output() drawStart = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
    this.chartParam.push({
      name: 'A',
      cash: 50000,
      minValue: -0.05,
      maxValue: 0.05
    });
  }

  onPlusClick() {
    this.chartParam.push({
      name: String.fromCharCode(this.chartParam.length + 97).toUpperCase(),
      cash: 50000,
      minValue: -0.05,
      maxValue: 0.05
    })
  }

  onMinusClick() {
    this.chartParam.pop();
  }

  onStartClick() {
    //console.log(this.chartParam);
    this.drawStart.emit(this.chartParam);
  }
}
