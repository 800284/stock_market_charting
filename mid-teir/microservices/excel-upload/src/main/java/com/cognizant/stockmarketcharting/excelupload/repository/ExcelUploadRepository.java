package com.cognizant.stockmarketcharting.excelupload.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.stockmarketcharting.excelupload.model.StockPrice;

@Repository
public interface ExcelUploadRepository extends JpaRepository<StockPrice, Integer> {
	
	
	
}
