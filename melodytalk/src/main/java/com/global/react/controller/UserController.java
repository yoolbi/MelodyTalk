package com.global.react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.global.react.domain.UserVO;
import com.global.react.service.UserService;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/users/*")
@Log4j2
public class UserController {
	    
	@Autowired
	UserService userSerivce;

    public UserVO user;
    
    @GetMapping("/getAll")
    public Object getUsers(){
        return userSerivce.getAllUsers();
    }
    
	@GetMapping("/get")
	public UserVO getUserByID(@RequestParam("user_id") String user_id) {
		 return userSerivce.getUserByID(user_id);
	}
	
	@PostMapping("/login")
	public void login(@RequestBody UserLoginRequest request) {
	    String email = request.getEmail();
	    String password = request.getPassword();
	    
	    UserVO user = userSerivce.getUserByEmail(email);
	    if (user != null && user.isValidPassword(password)) {
	    	log.info("login success");
	    } else {
	    	log.info("login failed");
	    }
	}
	
	@PostMapping("/insert")
	public void insertUser(@RequestBody UserVO userVO) {
		userSerivce.insertUser(userVO);
	}
    
	

}
