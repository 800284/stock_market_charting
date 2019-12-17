package com.cognizant.stockmarketcharting.authenticationservice.service;

public interface EmailService {
	void send(String from, String to, String title, String body);
}
