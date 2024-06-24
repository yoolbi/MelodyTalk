package com.global.react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.global.react.domain.PostVO;
import com.global.react.service.PostService;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/posts/*")
@Log4j2
public class PostController {
	
	@Autowired
	PostService postService;
	
	public PostVO post;
	
	@GetMapping("/getAll")
    public Object getPosts(){
        return postService.getAllPosts();
    }
    
	@GetMapping("/get")
	public Object getPostsByUserID(@RequestParam("user_id") String user_id) {
		 return postService.getPostsByUserID(user_id);
	}
	
	@PostMapping("/insert")
	public void insertPost(@RequestBody PostVO postVO) {
		postService.insertPost(postVO);
		log.info("insert post");
	}
	
	@DeleteMapping("/delete")
	public void deletePost(@RequestParam("post_id") String post_id) {
		postService.deletePost(post_id);
		log.info("delete post with id: " + post_id);
	}

}
