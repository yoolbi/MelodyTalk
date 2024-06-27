package com.global.react.service;

import java.util.List;

import com.global.react.domain.CommentDTO;

public interface CommentService {
	
	public List<CommentDTO> getCommentsByPost(String post_id);
	
	public void insertComment(CommentDTO commentDTO);
}
