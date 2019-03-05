import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  param: any[];
  public multi: any[];
  public view: any[];
  showXAxis: boolean;
  showYAxis: boolean;
  gradient: boolean;
  showLegend: boolean;
  showXAxisLabel: boolean;
  xAxisLabel: string;
  showYAxisLabel: boolean;
  yAxisLabel: string;
  timeline: boolean;

  colorScheme: any;

  // line, area
  autoScale: boolean;


  continuousInput = () => {
    let newYear = ( (+(this.multi[0].series[this.multi[0].series.length - 1].name)) + 1 ).toString();
    for(let i = 0; i < this.multi.length; i++) {
      let newValue = (1 + (Math.random()  * (this.param[i].maxValue - this.param[i].minValue) + this.param[i].minValue) ) * (this.multi[i].series[this.multi[i].series.length - 1].value);
      this.multi[i].series.push({
        name: newYear,
        value: newValue
      })
    }

    this.multi = [...this.multi];
  }

  ngOnInit() {
    // options for the chart
    this.showXAxis = true;
    this.showYAxis = true;
    this.gradient = false;
    this.showLegend = true;
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Year';
    this.showYAxisLabel = true;
    this.yAxisLabel = 'Value';
    this.timeline = true;

    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#545aa4']
    };

    // line, area
    this.autoScale = true;
    this.multi = [];
    this.multi = [...this.multi];
  }

  onSelect(event) {
    console.log(event);
  }

  startDraw(param) {
    this.multi = []; 
    this.multi = [...this.multi];
    this.param = param;
    for(let i = 0; i < param.length; i++) {
      this.multi.push({
        "name": param[i].name,
        "series": [
          {
            "name": 0,
            "value": param[i].cash
          }
        ]
      })
    }
    this.multi = [...this.multi];
    
    setInterval(this.continuousInput, 2000);
  }
}
