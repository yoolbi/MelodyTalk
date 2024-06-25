package com.global.react.service;

import java.util.List;

import com.global.react.domain.LikeDTO;

public interface LikeService {
	public List<LikeDTO> getLikesByPost(String post_id);
	
	public List<LikeDTO> getLikesByUser(String user_id);
	
	public void insertLike(LikeDTO likeDTO);
	
	public void deleteLike(String user_id, String post_id);
}
