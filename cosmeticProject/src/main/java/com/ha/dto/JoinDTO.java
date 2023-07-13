package com.ha.dto;

import javax.validation.constraints.Pattern;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class JoinDTO {

	// 회원 id
	@Pattern(regexp = "[A-Za-z0-9]{4,15}$", message = "아이디는 영어, 숫자 4 ~15자리로 입력 가능합니다")
	private String memberId;

	// 회원 비밀번호
	private String memberPw;

	// 회원 이름
	private String memberName;
	
	//회원 전화번호
	@Pattern(regexp = "^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$", message = "휴대폰번호를 확인해 주세요")
	private String Phone;
	
	// 회원 이메일
	@Pattern(regexp = "^([0-9a-zA-Z_\\.-]+)@([0-9a-zA-Z_-]+)(\\.[0-9a-zA-Z_-]+){1,2}$" , message = "올바른 이메일 형식이 아닙니다")
	private String Email;

	// 회원 우편번호
	private String Addr1;

	// 회원 주소
	private String Addr2;

	// 회원 상세주소
	private String Addr3;

	// 회원 포인트
	private int point;
	

}
