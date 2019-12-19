
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Company } from '../model/Company';
import * as FileSaver from 'file-saver';
const EXCEL_EXTENSION = '.csv';
import HC_exportData from 'highcharts/modules/export-data';
import { StockMarketService } from 'src/app/services/stock-market.service';
HC_exportData(Highcharts)
@Component({
  selector: 'app-compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.css']
})
export class CompareChartComponent implements OnInit {

  companies: Company[] = [];
  companyOne: string;
  companyTwo: string;
  dataLoaded: Promise<boolean>;
  stockData: any[];
  chart: Highcharts.Chart;
  differentFlag: boolean;
  public options: any = {
    chart: {
      type: 'line',

    },
    title: {
      text: 'Select Company code First'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
        return 'x: ' + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
          ' y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.value);
        }
      }
    },



    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }
  constructor(private stockMarketService: StockMarketService) { }

  ngOnInit() {
    this.differentFlag = false;
    this.stockMarketService.getCompanies().subscribe((response: Company[]) => {
      this.companies = response;
      this.dataLoaded = Promise.resolve(true);
      this.chart = Highcharts.chart('showdata', this.options);
    })
  }
  saveCompanyTwo(companyCode) {
    this.companyTwo = companyCode;
  }

  saveCompanyOne(companyCode) {
    this.companyOne = companyCode;
  }
  filterSelectedData(companyCode: string) {
    if (this.companyTwo != companyCode) {
      this.differentFlag = false;
      this.options.title.text = "Stock-Details of " + companyCode;
      this.stockMarketService.getStockDetails(companyCode).subscribe((response: any) => {
        this.stockData = response;
        let data: any[] = [];
        this.stockData.forEach((item) => {
          let point: any[] = [];
          point.push(Date.parse(item.date.split("T", 1) + "T" + item.time));
          point.push(item.currentPrice);
          data.push(point);
          data.sort((n1, n2) => {
            if (n1[0] > n2[0]) {
              return 1;
            } else {
              return -1;
            }
          });
          this.chart.destroy();
          this.chart = Highcharts.chart('showdata', this.options);
          this.chart.addSeries({
            name: companyCode,
            data: data,
            type: "line"
          }, true, true);
          this.chart.redraw()
        });
        this.compareSecond(this.companyTwo);
      });


    } else {
      this.differentFlag = true;
    }
  }

  compareSecond(companyCode) {
    if (companyCode != this.companyOne) {
      this.differentFlag = false;
      this.stockMarketService.getStockDetails(companyCode).subscribe((response: any) => {
        this.stockData = response;
        let data: any[] = [];
        this.stockData.forEach((item) => {
          let point: any[] = [];
          point.push(Date.parse(item.date.split("T", 1) + "T" + item.time));
          point.push(item.currentPrice);
          data.push(point);
          data.sort((n1, n2) => {
            if (n1[0] > n2[0]) {
              return 1;
            } else {
              return -1;
            }
          });

        });
        this.chart.addSeries({
          name: companyCode,
          data: data,
          type: "line"
        }, true, true);
        this.chart.redraw()
      });
    } else {
      this.differentFlag = true;
    }
  }

  compareBoth() {
    this.filterSelectedData(this.companyOne);
  }

}
