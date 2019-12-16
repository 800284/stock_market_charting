package com.cognizant.stockmarketcharting.excelupload.service;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.stockmarketcharting.excelupload.model.StockPrice;
import com.cognizant.stockmarketcharting.excelupload.repository.ExcelUploadRepository;

@Service
public class ExcelUploadServiceImpl implements ExcelUploadService {

	 @Autowired
	 ExcelUploadRepository excelUploadRepository;
	@Override
	public void uploadFileService(String filePath) throws FileNotFoundException {
		// TODO Auto-generated method stub
		
		
		 FileInputStream inputStream = new FileInputStream(filePath);
		 
		
		
		 Workbook workbook;
		try {
			workbook = new XSSFWorkbook(inputStream);
			 Sheet firstSheet = workbook.getSheetAt(0);
	         Iterator<Row> rowIterator = firstSheet.iterator();
	      
             
	            rowIterator.next();
	            
	            while (rowIterator.hasNext() ) {
	                Row nextRow = rowIterator.next();
	               
	                Iterator<Cell> cellIterator = nextRow.cellIterator();
	                StockPrice stockPrice = new StockPrice();
	                while (cellIterator.hasNext()) {
	                    Cell nextCell = cellIterator.next();
	                    int columnIndex = nextCell.getColumnIndex();
	                    switch (columnIndex) {
	                    case 0:
	                        String companyCode = nextCell.getStringCellValue();
	                        stockPrice.setCompanyCode(companyCode);
	                        System.out.println("=================>" + stockPrice.getCompanyCode());
	                        break;
	                    case 1:
	                        String stockExchange = nextCell.getStringCellValue();
	                        stockPrice.setStockExchange(stockExchange);
	                        System.out.println("=================>" + stockExchange);
	                        break;
	                    case 2:
	                        Long currentPrice = (long) nextCell.getNumericCellValue();
	                        stockPrice.setCurrentPrice(currentPrice);
	                        System.out.println("=================>" + currentPrice);
	                        break;
	                    case 3:
	                    	Date date = nextCell.getDateCellValue();
	                    	stockPrice.setDate(date);
	                    	System.out.println("=================>" + date);
	                    	break;
	                    case 4:
	                    	Date time = nextCell.getDateCellValue();               	
	                    	SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
	                    	stockPrice.setTime(Time.valueOf(sdf.format(time)));
	                    	System.out.println("=================>1212" + Time.valueOf(sdf.format(time)));
	              
	                    	break;
	                    	default:
	                    		break;
	                    }
	                }
	                if(stockPrice.getCompanyCode()!=null) {
	                 excelUploadRepository.save(stockPrice);}              
	                }     
	            workbook.close();
	            
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
        

		
	}

}
