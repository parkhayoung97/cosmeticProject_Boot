<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/member/join.css">
<script src="https://code.jquery.com/jquery-3.4.1.js"
	integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
	crossorigin="anonymous"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</head>
<body>

	<div class="wrapper">
		<form action="/member/join" method="post" id="join_form">
			<div class="wrap">
				<div class="subjecet">
					<span>회원가입</span>
				</div>
				<div class="id_wrap">
					<div class="id_name">아이디</div>
					<div class="id_input_box">
						<input class="id_input" name="memberId" maxlength="20" placeholder="아이디를 영어+숫자를 사용하여 4~15 사이로 입력해주세요."> 
						<span class="msg_box">${errorMsg.memberId }</span>
					<div class="Id_check_button">
							<span>중복 아이디 체크</span>
						</div>
					</div>
				</div>
				<div class="pw_wrap">
					<div class="pw_name">비밀번호</div>
					<div class="pw_input_box">
						<input class="pw_input" name="memberPw" maxlength="20">
						<span class="msg_box">${errorMsg.memberPw }</span>
					</div>
				</div>
				<div class="pwck_wrap">
					<div class="pwck_name">비밀번호 확인</div>
					<div class="pwck_input_box">
						<input class="pwck_input" maxlength="20" placeholder="비밀번호를 한번더 입력해 주세요"> 
						<span class="final_pwck_ck"> 비밀번호 확인을 입력해주세요.</span> <span
						class="pwck_input_re_1"> 비밀번호가 일치 합니다.</span> <span
						class="pwck_input_re_2"> 비밀번호가 일치하지 않습니다.</span>
					</div>
				</div>
				<div class="user_wrap">
					<div class="user_name">이름</div>
					<div class="user_input_box">
						<input class="user_input" name="memberName"> 
						<span class="msg_box">${errorMsg.memberName }</span>
					</div>
				</div>
				<div class="phone_wrap">
					<div class="phone_name">전화번호</div>
					<div class="phone_input_box">
						<input class="phone_input" name="Phone"
							placeholder="'-' 없이 입력해 주세요"
							onkeypress="return lenthCheck(this, 11);"> 
							<span class="msg_box">${errorMsg.Phone }</span>
					</div>
				</div>
				<div class="mail_wrap">
					<div class="mail_name">이메일</div>
					<div class="mail_input_box">
						<input class="mail_input" name="Email">
						<span class="msg_box">${errorMsg.Email }</span>
					</div>
					<div class="mail_check_wrap">
						<div class="mail_check_input_box" id="mail_check_input_box_false">
							<input class="mail_check_input" disabled="disabled">
						</div>
						<div class="mail_check_button">
							<span>인증번호 전송</span>
						</div>
						<div class="clearfix"></div>
						<span id="mail_check_input_box_warn"></span>
					</div>
				</div>
				<div class="address_wrap">
					<div class="address_name">주소</div>
					<div class="address_input_1_wrap">
						<div class="address_input_1_box">
							<input class="address_input_1" name="Addr1" placeholder="우편번호를 입력해 주세요" readonly="readonly">
						</div>
						<div class="address_button" onclick="execution_daum_address()">
							<span>주소 찾기</span>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="address_input_2_wrap">
						<div class="address_input_2_box">
							<input class="address_input_2" name="Addr2" placeholder="주소를 입력해 주세요" readonly="readonly"> 
						</div>
					</div>
					<div class="address_input_3_wrap">
						<div class="address_input_3_box">
							<input class="address_input_3" name="Addr3" placeholder="상세주소를 입력해 주세요" readonly="readonly"> 
							<span class="msg_box">${errorMsg.Addr3 }</span>
						</div>
					</div>
				</div>
				<div class="join_button_wrap">
					<input type="submit" class="join_button" value="가입하기">
				</div>
			</div>
		</form>
	</div>
	<script src="/js/member/join.js"></script>

</body>
</html>