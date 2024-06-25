package com.global.react.domain;

import java.util.Date;

import lombok.Data;

@Data
public class PostVO {
	private String post_id;
	private String user_id;
	private String content;
	private String image;
	private String music_file_name;
	private Integer copyright;
	private Date createdate;
	private byte[] image_file;
	private byte[] music_file; 
	private String username;
	private Integer like_count;
}
