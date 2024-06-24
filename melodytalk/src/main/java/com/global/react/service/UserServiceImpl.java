package com.global.react.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.global.react.domain.UserVO;
import com.global.react.mapper.UserMapper;

import lombok.Setter;

@Service
public class UserServiceImpl implements UserService {

	@Setter(onMethod_ = @Autowired)
	private UserMapper userMapper;

	@Override
	public List<UserVO> getAllUsers() {
		return userMapper.getAllUsers();
	}

	@Override
	public UserVO getUserByID(String user_id) {
		return userMapper.getUserByID(user_id);
	}

	@Transactional
	@Override
	public void insertUser(UserVO userVO) {
		userVO.setUser_id(UUID.randomUUID().toString());
		userMapper.insertUser(userVO);		
	}

	@Override
	public UserVO getUserByEmail(String email) {
		return userMapper.getUserByEmail(email);
	}


}
