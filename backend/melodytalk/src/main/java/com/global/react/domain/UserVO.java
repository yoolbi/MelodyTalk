package com.global.react.domain;

import lombok.Data;

@Data
public class UserVO {
	private String user_id;
	private String username;
	private String email;
	private String password;
	private String name;
	private String country;
	private String intro;
	
    public boolean isValidPassword(String inputPassword) {
        return this.password.equals(inputPassword);
    }
}
