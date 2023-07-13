package com.ha.login;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ha.dto.UserDTO;

public class LoginDetailService implements UserDetailsService {

	@Autowired
	private SqlSession sql;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		UserDTO userDto = sql.selectOne("member.login", username);

		if (userDto != null) {
			LoginService loginDetail = new LoginService();
			loginDetail.setUserDto(userDto);
			return loginDetail;
		} else {
			throw new UsernameNotFoundException("유저없음");
		}
	}

}
