package com.global.react.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.global.react.domain.LikeDTO;
import com.global.react.mapper.LikeMapper;

import lombok.Setter;

@Service
public class LikeServiceImpl implements LikeService {
	
	@Setter(onMethod_ = @Autowired)
	private LikeMapper likeMapper;
	
	@Override
	public List<LikeDTO> getLikesByPost(String post_id) {
		return likeMapper.getLikesByPost(post_id);
	}

	@Override
	public List<LikeDTO> getLikesByUser(String user_id) {
		return likeMapper.getLikesByUser(user_id);
	}

	@Transactional
	@Override
	public void insertLike(LikeDTO likeDTO) {
		likeDTO.setLike_id(UUID.randomUUID().toString());
		likeMapper.insertLike(likeDTO);
	}

	@Transactional
	@Override
	public void deleteLike(String user_id, String post_id) {
		likeMapper.deleteLike(user_id, post_id);
	}

}
