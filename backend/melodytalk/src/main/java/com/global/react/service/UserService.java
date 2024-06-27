package com.global.react.service;

import com.global.react.domain.UserVO;
import java.util.List;

public interface UserService {
	 public List<UserVO> getAllUsers();
	 
	 public UserVO getUserByID(String user_id);
	 
	 public UserVO getUserByEmail(String email);
	 
	 public void insertUser(UserVO userVO);

}
