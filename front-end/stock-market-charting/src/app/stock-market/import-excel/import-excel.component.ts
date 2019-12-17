import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {
  uploadFlag:boolean=false;
  apiEndPoint = "http://localhost:8087/stock-market-charting/upload";

  constructor(private http:HttpClient) {
  }

  ngOnInit(){}

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      this.http.post(this.apiEndPoint, formData)
        .subscribe(
              (response)=>this.uploadFlag =true
        
        )
    }
  }
}
