package com.global.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.global.react.domain.LikeDTO;

@Mapper
public interface LikeMapper {
	
	public List<LikeDTO> getLikesByPost(String post_id);
	
	public List<LikeDTO> getLikesByUser(String user_id);

	public void insertLike(LikeDTO likeDTO);
	
	public void deleteLike(String user_id, String post_id);
}
