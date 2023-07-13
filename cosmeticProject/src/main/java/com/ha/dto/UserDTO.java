package com.ha.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {

	private long id;
	private String memberId;
	private String memberPw;
	private String memberName;
	private String Phone;
	private String Email;
	private String Addr1;
	private String Addr2;
	private String Addr3;
	private int point;
	private String role;
	
	public UserDTO(String memberId, String memberPw, String memberName, String Phone, String Email, String Addr1, String Addr2, String Addr3) {
		this.memberId = memberId;
		this.memberPw = memberPw;
		this.memberName = memberName;
		this.Phone = Phone;
		this.Email = Email;
		this.Addr1 = Addr1;
		this.Addr2 = Addr2;
		this.Addr3 = Addr3;
	}
}
