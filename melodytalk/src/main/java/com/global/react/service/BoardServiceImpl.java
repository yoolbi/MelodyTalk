package com.global.react.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.global.react.domain.BoardVO;
import com.global.react.mapper.BoardMapper;

import lombok.Setter;

@Service
public class BoardServiceImpl implements BoardService {

	@Setter(onMethod_ = @Autowired)
	private BoardMapper mapper;

	@Override
	public List<BoardVO> getList() {
		return mapper.getList();
	}

}
