package com.global.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.global.react.domain.FollowDTO;

@Mapper
public interface FollowMapper {
	
	public List<FollowDTO> getFollowers(String to_user_id);
	
	public List<FollowDTO> getFollowings(String from_user_id);
	
	public void insertFollow(FollowDTO followDTO);
	
	public void deleteFollow(String follow_id);
 
}
