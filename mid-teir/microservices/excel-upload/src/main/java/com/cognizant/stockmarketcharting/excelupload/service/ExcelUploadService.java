package com.cognizant.stockmarketcharting.excelupload.service;

import java.io.FileNotFoundException;


public interface ExcelUploadService {
	public void uploadFileService(String filePath) throws FileNotFoundException;
}
