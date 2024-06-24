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
	
//	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    
	@Autowired
	UserService userSerivce;

    public UserVO user;
    
    @GetMapping("/test")
    public String test() {
    	return "Hello, world";
    }
    
    @GetMapping("/getAll")
    public Object getUsers(){
        return userSerivce.getAllUsers();
    }
    
	@GetMapping("/get")
	public UserVO getUserByID(@RequestParam("user_id") String user_id) {
		 return userSerivce.getUserByID(user_id);
	}
	
	@PostMapping("/login")
	public boolean login(@RequestBody UserLoginRequest request) {
	    String email = request.getEmail();
	    String password = request.getPassword();
	    
	    UserVO user = userSerivce.getUserByEmail(email);
	    if (user != null && user.isValidPassword(password)) {
	    	log.info("login success");
	        return true;
	    } else {
	    	log.info("login failed");
	        return false;
	    }
	}
	
	@PostMapping("/insert")
	public boolean insertUser(@RequestBody UserVO userVO) {
		userSerivce.insertUser(userVO);
		return true;
	}
    
	

}
