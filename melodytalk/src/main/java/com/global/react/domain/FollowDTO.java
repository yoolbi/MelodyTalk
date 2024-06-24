package com.global.react.domain;

import lombok.Data;

@Data
public class FollowDTO {
	private String followID;
	private String fromUserID;
	private String toUserID;
}
