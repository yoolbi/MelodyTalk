package com.global.react.domain;

import lombok.Data;

@Data
public class FollowDTO {
	private String follow_id;
	private String from_user_id;
	private String to_user_id;
	private String from_user_username;
	private String to_user_username;
}
