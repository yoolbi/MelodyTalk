package com.global.react.domain;

import java.util.Date;

import lombok.Data;

@Data
public class PostDTO {
	private String postID;
	private String userID;
	private String content;
	private String image;
	private String musicFileName;
	private Integer copyright;
	private Date createDate;
}
