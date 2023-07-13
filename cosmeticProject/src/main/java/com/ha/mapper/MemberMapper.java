package com.ha.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ha.dto.JoinDTO;

@Mapper
public interface MemberMapper {

	// 회원가입
	public void memberJoin(JoinDTO memberDto);

	// 아이디 중복 검사
	public int idCheck(String memberId);
	
	// 로그인 
    public JoinDTO memberLogin(JoinDTO member);
}
