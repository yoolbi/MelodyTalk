package com.global.react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.global.react.domain.FollowDTO;
import com.global.react.service.FollowService;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/follows/*")
@Log4j2
public class FollowController {
	
	@Autowired
	FollowService followService;
	
	public FollowDTO follow;
    
	@GetMapping("/getFollowers")
	public Object getFollowers(@RequestParam("to_user_id") String to_user_id) {
		 return followService.getFollowers(to_user_id);
	}
	
	@GetMapping("/getFollowings")
	public Object getFollowings(@RequestParam("from_user_id") String from_user_id) {
		 return followService.getFollowings(from_user_id);
	}
	
	@PostMapping("/insert")
	public void insertFollow(@RequestBody FollowDTO follow) {
		followService.insertFollow(follow);
		log.info("insert follow");
	}

	@DeleteMapping("/delete")
	public void deleteFollow(@RequestParam("follow_id") String follow_id) {
		followService.deleteFollow(follow_id);
		log.info("delete follow with id: " + follow_id);
	}

}
