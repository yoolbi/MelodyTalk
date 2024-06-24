package com.global.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.global.react.domain.BoardVO;

@Mapper
public interface BoardMapper {

	public List<BoardVO> getList();
}
