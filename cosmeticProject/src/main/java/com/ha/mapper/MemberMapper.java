package com.ha.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ha.dto.MemberDTO;

@Mapper
public interface MemberMapper {

	// 회원가입
	public void memberJoin(MemberDTO memberDto);

	// 아이디 중복 검사
	public int idCheck(String memberId);
}
