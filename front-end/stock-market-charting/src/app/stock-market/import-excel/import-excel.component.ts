import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockMarketService } from 'src/app/services/stock-market.service';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {
  uploadFlag:boolean=false;
  

  constructor(private stockService:StockMarketService) {
  }

  ngOnInit(){}

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      this.stockService.uploadFile(formData).subscribe((response)=>this.uploadFlag=true);
    }
  }
}
