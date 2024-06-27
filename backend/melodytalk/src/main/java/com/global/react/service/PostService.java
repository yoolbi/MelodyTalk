package com.global.react.service;

import java.util.List;

import com.global.react.domain.PostVO;

public interface PostService {
	public List<PostVO> getAllPosts();
	
	public List<PostVO> getPostsByUserID(String user_id);
	
	public List<PostVO> searchPosts(String searchString);
	
	public void insertPost(PostVO postVO);
	
	public void deletePost(String post_id);
}
