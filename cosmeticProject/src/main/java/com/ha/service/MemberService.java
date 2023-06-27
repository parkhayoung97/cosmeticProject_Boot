package com.ha.service;

import com.ha.dto.MemberDTO;

public interface MemberService {

	// 회원가입
	public void memberJoin(MemberDTO memberDto);

	// 아이디 중복 검사
	public int idCheck(String memberId) throws Exception;
}
