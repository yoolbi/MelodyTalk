package com.global.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.global.react.domain.PostVO;

@Mapper
public interface PostMapper {
    
    public List<PostVO> getAllPosts();
    
    public List<PostVO> getPostsByUserID(String user_id);
    
	public List<PostVO> searchPosts(String searchString);
	
    public void insertPost(PostVO postVO);
    
    public void deletePost(String post_id);
    

}
