import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as FileSaver from 'file-saver';
const EXTENSION = '.csv';
import HC_exportData from 'highcharts/modules/export-data';
HC_exportData(Highcharts)

import { Company } from '../model/Company';
import { StockMarketService } from 'src/app/services/stock-market.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  companies: Company[] = [];
  company1:Company;
  company2:Company;
  dataLoaded: Promise<boolean>;
  stockData: any[];
  clickFlag:boolean;
  chart:Highcharts.Chart
  abc:Highcharts.LangOptions;
  public options: any = {
    chart: {
      type: 'line',
      height: 700
    },
    title: {
      text: 'Select Company Code to Draw Chart'
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
    
  }
  constructor(private stockMarketService:StockMarketService) { }

  ngOnInit() {

    this.stockMarketService.getCompanies().subscribe((response: Company[]) => {
      
      this.companies = response;
      this.dataLoaded = Promise.resolve(true);
      this.chart=Highcharts.chart('container', this.options);
    })
  }
  filterSelectedData(companyCode: string) {
    this.clickFlag=true;
    this.options.title.text = "Chart for the company with code " + companyCode;
    this.stockMarketService.getStockDetails(companyCode).subscribe((response: any) => {
      this.stockData = response;
      let data: any[] = [];
      this.stockData.forEach((item) => {
        let point: any[] = [];
        var date = Date.parse(item.date.split("T", 1) + "T" + item.time);
        point.push(date)
        point.push(item.currentPrice);
        data.push(point);
        data.sort((n1, n2) => {
          if (n1[0] > n2[0]) {
            return 1;
          } else {
            return -1;
          }
        });
        console.log(data)
        this.chart.destroy();
        this.chart=Highcharts.chart('container',this.options);
        this.chart.addSeries({
          name: companyCode,
          data:data,
          type:"line"
        },true,true);
        this.chart.redraw()
      })
    })
}
 downloadCsv() {
 this.chart.getCSV();
 this.saveAsExcelFile(this.chart.getCSV(),"NewFile");
}

private saveAsExcelFile(buffer: any, fileName: string): void {
  const data: Blob = new Blob([buffer], {
    type: "text/csv"
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXTENSION);
}
}
