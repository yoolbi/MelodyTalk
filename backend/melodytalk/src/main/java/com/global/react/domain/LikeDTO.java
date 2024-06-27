package com.global.react.domain;

import lombok.Data;

@Data
public class LikeDTO {
	private String like_id;
	private String user_id;
	private String post_id;
	private String username;
}
