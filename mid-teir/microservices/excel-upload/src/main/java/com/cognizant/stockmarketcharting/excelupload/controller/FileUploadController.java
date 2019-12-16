package com.cognizant.stockmarketcharting.excelupload.controller;

import java.io.FileNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.stockmarketcharting.excelupload.service.ExcelUploadService;

@RestController
@RequestMapping("/stock-market-charting")
public class FileUploadController {

	@Autowired
	ExcelUploadService excelUploadService;
	@PostMapping
	public void addFile() throws FileNotFoundException {
		excelUploadService.uploadFileService();
	}
	
}
