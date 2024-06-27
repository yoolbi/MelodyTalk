package com.global.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.global.react.domain.UserVO;

@Mapper
public interface UserMapper {

    public List<UserVO> getAllUsers();
    
    public UserVO getUserByID(String user_id);
    
    public UserVO getUserByEmail(String email);
    
    public void insertUser(UserVO userVO);

}


