package com.ha.service;

import com.ha.dto.JoinDTO;

public interface MemberService {

	// 회원가입
	public void memberJoin(JoinDTO memberDto);

	// 아이디 중복 검사
	public int idCheck(String memberId) throws Exception;
	
	// 로그인 
    public JoinDTO memberLogin(JoinDTO member) throws Exception;
}
