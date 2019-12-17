package com.cognizant.stockmarketcharting.excelupload.service;

import java.io.FileNotFoundException;

import com.cognizant.stockmarketcharting.excelupload.dto.ExcelUploadDTO;


public interface ExcelUploadService {
	public void uploadFileService(String filePath) throws FileNotFoundException;
	public ExcelUploadDTO getSummary();
}
