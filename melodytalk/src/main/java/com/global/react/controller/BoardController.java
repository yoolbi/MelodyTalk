package com.global.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.global.react.domain.BoardVO;
import com.global.react.service.BoardService;

@RestController
public class BoardController {
	
	@Autowired
	BoardService boardService;
	
	@GetMapping("/api/data")
    public List<BoardVO> test() {
		return boardService.getList();
    }

}
