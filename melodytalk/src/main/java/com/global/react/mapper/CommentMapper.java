package com.global.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.global.react.domain.CommentDTO;

@Mapper
public interface CommentMapper {
	
	public List<CommentDTO> getCommentsByPost(String post_id);
	
	public void insertComment(CommentDTO commentDTO);
	
	public void deleteComment(String comment_id);
}
