package com.global.react.domain;

import java.util.Date;
import lombok.Data;

@Data
public class CommentDTO {
	private String commentID;
	private String userID;
	private String postID;
	private String commentContent;
	private Date date;
}
