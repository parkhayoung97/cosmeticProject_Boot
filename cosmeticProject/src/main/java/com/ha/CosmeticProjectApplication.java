package com.ha;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@RestController
@SpringBootApplication
public class CosmeticProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CosmeticProjectApplication.class, args);
	}
	
}
