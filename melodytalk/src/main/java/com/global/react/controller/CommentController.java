package com.global.react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.global.react.domain.CommentDTO;
import com.global.react.service.CommentService;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/comments/*")
@Log4j2
public class CommentController {
	
	@Autowired
	CommentService commentService;
	
	public CommentDTO comment;
	
	@GetMapping("/get")
	public Object getCommentsByPost(@RequestParam("post_id") String post_id) {
		return commentService.getCommentsByPost(post_id);
	}

	@PostMapping("/insert")
	public void insertComment(@RequestBody CommentDTO commentDTO) {
		commentService.insertComment(commentDTO);
		log.info("insert comment");
	}
	
}
