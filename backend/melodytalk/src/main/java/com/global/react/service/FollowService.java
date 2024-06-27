package com.global.react.service;

import java.util.List;

import com.global.react.domain.FollowDTO;

public interface FollowService {
	
	public List<FollowDTO> getFollowers(String to_user_id);
	
	public List<FollowDTO> getFollowings(String from_user_id);
	
	public void insertFollow(FollowDTO followDTO);
	
	public void deleteFollow(String follow_id);
}
