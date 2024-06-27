package com.global.react.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.global.react.domain.CommentDTO;
import com.global.react.mapper.CommentMapper;

import lombok.Setter;

@Service
public class CommentServiceImpl implements CommentService{
	
	@Setter(onMethod_ = @Autowired)
	private CommentMapper commentMapper;

	@Override
	public List<CommentDTO> getCommentsByPost(String post_id) {
		return commentMapper.getCommentsByPost(post_id);
	}

	@Transactional
	@Override
	public void insertComment(CommentDTO commentDTO) {
		commentDTO.setComment_id(UUID.randomUUID().toString());
		commentMapper.insertComment(commentDTO);
	}

}
