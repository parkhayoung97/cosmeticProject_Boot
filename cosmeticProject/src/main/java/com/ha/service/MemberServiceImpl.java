package com.ha.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ha.dto.MemberDTO;
import com.ha.mapper.MemberMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	MemberMapper membermapper;

	@Override
	public void memberJoin(MemberDTO memberDto) {
		
		membermapper.memberJoin(memberDto);
		
	}

	@Override
	public int idCheck(String memberId) throws Exception {
		
		return membermapper.idCheck(memberId);
	}

}
