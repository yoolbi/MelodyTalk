package com.global.react.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.global.react.domain.PostVO;
import com.global.react.mapper.PostMapper;

import lombok.Setter;

@Service
public class PostServiceImpl implements PostService {
	
	@Setter(onMethod_ = @Autowired)
	private PostMapper postMapper;

	@Override
	public List<PostVO> getAllPosts() {
		return postMapper.getAllPosts();
	}

	@Override
	public List<PostVO> getPostsByUserID(String user_id) {
		return postMapper.getPostsByUserID(user_id);
	}

	@Override
	public List<PostVO> searchPosts(String searchString) {
		return postMapper.searchPosts(searchString);
	}
	
	@Transactional
	@Override
	public void insertPost(PostVO postVO) {
	    postVO.setPost_id(UUID.randomUUID().toString());
	    postMapper.insertPost(postVO);
	}

	@Transactional
	@Override
	public void deletePost(String post_id) {
		postMapper.deletePost(post_id);
	}

}
