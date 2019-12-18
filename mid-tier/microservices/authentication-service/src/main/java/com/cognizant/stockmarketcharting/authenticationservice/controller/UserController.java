package com.cognizant.stockmarketcharting.authenticationservice.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Valid;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cognizant.stockmarketcharting.authenticationservice.exception.UserAlreadyExistsException;
import com.cognizant.stockmarketcharting.authenticationservice.model.User;
import com.cognizant.stockmarketcharting.authenticationservice.repository.UserRepository;
import com.cognizant.stockmarketcharting.authenticationservice.security.AppUserDetailsService;
import com.cognizant.stockmarketcharting.authenticationservice.service.EmailService;
import com.cognizant.stockmarketcharting.authenticationservice.service.UserConfirmationService;
import com.cognizant.stockmarketcharting.authenticationservice.service.UserService;



@RestController
@RequestMapping("/stock-market-charting/users")
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	AppUserDetailsService appUserDetailsService;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder; 
	@Autowired
	UserService userService;

	@Autowired
	UserConfirmationService userConfirmationService;
	@Autowired
	EmailService emailService;
	
	@GetMapping()
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@PostMapping()
	public boolean signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		LOGGER.info("SIGNUP controller Start");
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		boolean status =  appUserDetailsService.signup(user);
		String token = userConfirmationService.setTokenForConfirmation(user.getUsername());
		emailService.send("ctstestmail10@gmail.com", user.getEmail(), "confirm your email for Stock Exchange by clicking here", "http://localhost:8083/authentication-service/stock-market-charting/users/confirm/"+token);
		LOGGER.info("SIGNUP controller End");
		return status;
	}
	
	@GetMapping("/confirm/{token}")
	public void confirmMail(@PathVariable String token) {
		userConfirmationService.confirmMailAddress(token);
	}
	
	@PutMapping("/update-user")
	public void updateDetails(@RequestBody User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userService.updateDetails(user);
	}
	@GetMapping("/get-user/{username}")
	public User getUser(@PathVariable String username) {
		return userRepository.findByUsername(username);
	}
	@GetMapping("/{username}")
	public boolean getUserStatus(@PathVariable String username) {
		return userRepository.findByUsername(username).isConfirmation();
	}
}