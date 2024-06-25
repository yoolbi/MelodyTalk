package com.global.react.controller;

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

import com.global.react.domain.LikeDTO;
import com.global.react.service.LikeService;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/likes/*")
@Log4j2
public class LikeController {
	
	@Autowired
	LikeService likeService;
	
	public LikeDTO like;
	
	@GetMapping("/get")
	public Object getLikesByPost(@RequestParam("post_id") String post_id) {
		return likeService.getLikesByPost(post_id);
	}
	
	@GetMapping("/getByUser")
	public Object getLikesByUser(@RequestParam("user_id") String user_id) {
		return likeService.getLikesByUser(user_id);
	}

	@PostMapping("/insert")
	public void insertLike(@RequestBody LikeDTO likeDTO) {
		likeService.insertLike(likeDTO);
		log.info("insert like");
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> deleteLike(@RequestParam("user_id") String user_id, @RequestParam("post_id") String post_id) {
	    try {
	        likeService.deleteLike(user_id, post_id);
	        log.info("delete like");
	        return ResponseEntity.ok().build();
	    } catch (Exception e) {
	        log.error("Error deleting like", e);
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting like: " + e.getMessage());
	    }
	}
}
