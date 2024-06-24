package com.global.react.mapper;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import com.global.react.domain.PostDTO;

@Mapper
@Component
public interface PostMapper {

    @Insert("INSERT INTO POST(POST_ID, USER_ID, CONTENT, IMAGE, MUSIC_FILE_NAME, COPYRIGHT, CREATEDATE) " +
            "values(#{postID}, #{userID}, #{content}, #{image}, #{musicFileName}, #{copyright}, #{createDate})")
    int insertPost(String postID, String userID, String content, String image,
                   String musicFileName, int copyright, Date createDate);
    
    @Select("SELECT * FROM POST")
    List<PostDTO> getAllPosts();
    
    @Select("SELECT * FROM POST WHERE USER_ID = #{userID}")
    List<PostDTO> getPostsByUserID(String userID);
    
    @Delete("DELETE FROM POST WHERE POST_ID = #{postID}")
    Integer deletePost(String postID);

}
