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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cognizant.stockmarketcharting.authenticationservice.exception.UserAlreadyExistsException;
import com.cognizant.stockmarketcharting.authenticationservice.model.User;
import com.cognizant.stockmarketcharting.authenticationservice.repository.UserRepository;
import com.cognizant.stockmarketcharting.authenticationservice.security.AppUserDetailsService;



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
	
	@GetMapping()
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@PostMapping()
	public boolean signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		LOGGER.info("START");
		LOGGER.debug("{}",user);
		// Create validator factory
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();

		// Validation is done against the annotations defined in country bean
		Set<ConstraintViolation<User>> violations = validator.validate(user);
		List<String> errors = new ArrayList<String>();

		// Accumulate all errors in an ArrayList of type String
		for (ConstraintViolation<User> violation : violations) {
			errors.add(violation.getMessage());
		}

		// Throw exception so that the user of this web service receives appropriate
		// error message
		if (violations.size() > 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.toString());
		}

		user.setPassword(passwordEncoder.encode(user.getPassword()));
		LOGGER.info("END");
        return appUserDetailsService.signup(user);
	}
}