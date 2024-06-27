package com.global.react.domain;

import java.util.Date;
import lombok.Data;

@Data
public class CommentDTO {
	private String comment_id;
	private String user_id;
	private String post_id;
	private String comment_content;
	private Date createdate;
	private String username;
}
