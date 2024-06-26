package com.global.react.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.global.react.domain.FollowDTO;
import com.global.react.mapper.FollowMapper;

import lombok.Setter;

@Service
public class FollowServiceImpl implements FollowService {
	
	@Setter(onMethod_ = @Autowired)
	private FollowMapper followMapper;

	@Override
	public List<FollowDTO> getFollowers(String to_user_id) {
		return followMapper.getFollowers(to_user_id);
	}

	@Override
	public List<FollowDTO> getFollowings(String from_user_id) {
		return followMapper.getFollowings(from_user_id);
	}

	@Transactional
	@Override
	public void insertFollow(FollowDTO followDTO) {
		followDTO.setFollow_id(UUID.randomUUID().toString());
		followMapper.insertFollow(followDTO);
	}

	@Transactional
	@Override
	public void deleteFollow(String follow_id) {
		followMapper.deleteFollow(follow_id);
	}

}
