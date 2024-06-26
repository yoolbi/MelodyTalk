package com.global.react.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
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
	
	@GetMapping("/search")
	public Object searchPosts(@RequestParam("searchString") String searchString) {
	    return postService.searchPosts(searchString);
	}
	
	@PostMapping("/insert")
	public ResponseEntity<String> insertPost(
	        @RequestParam("image_file") MultipartFile imageFile,
	        @RequestParam("music_file") MultipartFile musicFile,
	        @RequestParam("post") String postJson
	) {
	    ObjectMapper mapper = new ObjectMapper();
	    try {
	        PostVO postVO = mapper.readValue(postJson, PostVO.class);

	        // Handle files
	        if (imageFile != null && !imageFile.isEmpty()) {
	            postVO.setImage_file(imageFile.getBytes());
	            postVO.setImage(imageFile.getOriginalFilename());
	        }

	        if (musicFile != null && !musicFile.isEmpty()) {
	            postVO.setMusic_file(musicFile.getBytes());
	            postVO.setMusic_file_name(musicFile.getOriginalFilename());
	        }

	        // Insert post
	        postService.insertPost(postVO);

	        return ResponseEntity.ok("Post inserted successfully with ID: " + postVO.getPost_id());
	    } catch (IOException e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error parsing request data: " + e.getMessage());
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error: " + e.getMessage());
	    }
	}

	@DeleteMapping("/delete")
	public void deletePost(@RequestParam("post_id") String post_id) {
		postService.deletePost(post_id);
		log.info("delete post with id: " + post_id);
	}

}
