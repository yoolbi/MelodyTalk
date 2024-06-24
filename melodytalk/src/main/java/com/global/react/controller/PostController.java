package com.global.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.global.react.domain.PostDTO;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.global.react.domain.PostDTO;
import com.global.react.mapper.PostMapper;

import lombok.extern.log4j.Log4j;

@RestController
@CrossOrigin
@RequestMapping("/posts/*")
//@Log4j
public class PostController {
	

	    @Autowired
	    private PostMapper postMapper;

	    public PostDTO post;
	    
	    @GetMapping("/all")
	    public Object getPosts(){
//	    	log.info(post);
	        return postMapper.getAllPosts();
	    }
	    
	    @GetMapping("/userID/{userID}")
	    public Object getPostsByUserID(@PathVariable("userID") String userID){
	        List<PostDTO> allPosts = postMapper.getPostsByUserID(userID);
	        return allPosts;
	    }
	    
	    @PostMapping("/new")
	    public Integer postPost(PostDTO post) throws JsonProcessingException{
//	        ObjectMapper objectMapper = new ObjectMapper();
//	        post = objectMapper.readValue(content, PostDTO.class);
//	        log.info(post.toString());
//	    	log.info(post);
	        Integer res = postMapper.insertPost(post.getPostID(), post.getUserID(), post.getContent(), post.getImage(), post.getMusicFileName(), post.getCopyright(), post.getCreateDate());
	        return res;
	    }
	    
	    @DeleteMapping("/posts/delete/{postID}")
	    public Integer deletePost(@PathVariable("postID") String postID){
	        return postMapper.deletePost(postID);
	    }

}
