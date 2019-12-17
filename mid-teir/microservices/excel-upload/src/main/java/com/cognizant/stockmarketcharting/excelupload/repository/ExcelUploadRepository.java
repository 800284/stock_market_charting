package com.cognizant.stockmarketcharting.excelupload.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.stockmarketcharting.excelupload.model.StockPrice;

@Repository
public interface ExcelUploadRepository extends JpaRepository<StockPrice, Integer> {
	
	@Query(value="select min(sp_date) from stock_price",nativeQuery=true)
	public Date minDate();
	
	@Query(value="select max(sp_date) from stock_price",nativeQuery=true)
	public Date maxDate();
	

	
}
