package com.ha.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainController {

	@GetMapping("/")
	public String mainPageGET() {
		
		System.out.println("메인 화면 진입");
		
		return "main";
		
	}
	
}
