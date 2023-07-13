<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/css/member/login.css">
<script src="https://code.jquery.com/jquery-3.4.1.js"
	integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
	crossorigin="anonymous"></script>
<script
	src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</head>
<body>

	<div class="wrapper">

		<div class="wrap">
			<form id="login_form" method="post">
				<div class="logo_wrap">
					<span>Book Mall</span>
				</div>
				<div class="login_wrap">
					<div class="id_wrap">
						<div class="id_input_box">
							<input class="id_input" name="memberId">
						</div>
					</div>
					<div class="pw_wrap">
						<div class="pw_input_box">
							<input class="pw_iput" name="memberPw">
						</div>
					</div>
					<c:if test="${!empty loginFailMsg }">
						<script type="text/javascript">
							const msg = "${loginFailMsg}";
							swal(msg);
						</script>
					</c:if>
					<div class="login_button_wrap">
						<input type="button" class="login_button" value="로그인">
					</div>
				</div>
				<div class="box">
					<div class="continue_login">
						<label for="continue_login"> <span>로그인 유지하기</span> <input
							type="checkbox" id="continue_login" name="remember-me">
							<i class="fas fa-check-square"></i>
						</label>
					</div>
				</div>
			</form>

		</div>

	</div>
	<script src="/js/member/login.js"></script>
</body>
</html>