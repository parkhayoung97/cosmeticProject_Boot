package com.ha.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ha.dto.JoinDTO;
import com.ha.mapper.MemberMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	MemberMapper membermapper;

	@Override
	public void memberJoin(JoinDTO memberDto) {
		
		membermapper.memberJoin(memberDto);
		
	}

	@Override
	public int idCheck(String memberId) throws Exception {
		
		return membermapper.idCheck(memberId);
	}

	@Override
	public JoinDTO memberLogin(JoinDTO member) throws Exception {
		
		return membermapper.memberLogin(member);
	}

}
