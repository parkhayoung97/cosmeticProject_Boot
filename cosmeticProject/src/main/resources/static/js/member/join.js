	    var idCheck = false;//아이디
		var idckCheck = false;//아이디 중복 검사
		var pwckCheck = false;//비번
		var pwckcorCheck = false;//비번 확인
		var nameCheck = false; //이름 확인
		var phoneCheck = false; //전화번호 확인
		var mailCheck = false; //메일 확인
		var mailnumCheck = false; //인증 메일 확인
		var addressCheck = false; //주소 확인

		var code = ""; //이메일전송 인증번호 저장을 위한 코드
		
		//회원가입 버튼(회원가입 기능 작동)
		const isSubmit = (function(){
			
			var setidCheck = function(set){
				idCheck = set ? true : false;
				isSubmit();
			}
			var setidckCheck = function(set){
				idckCheck = set ? true : false;
				isSubmit();
			}
			var setpwckCheck = function(set){
				pwckCheck = set ? true : false;
				isSubmit();
			}
			var setpwckcorCheck = function(set){
				pwckcorCheck = set ? true : false;
				isSubmit();
			}
			var setnameCheck = function(set){
				nameCheck = set ? true : false;
				isSubmit();
			}
			var setphoneCheck = function(set){
				phoneCheck = set ? true : false;
				isSubmit();
			}
			var setmailCheck = function(set){
				mailCheck = set ? true : false;
				isSubmit();
			}
			var setmailnumCheck = function(set){
				mailnumCheck = set ? true : false;
				isSubmit();
			}
			var setaddressCheck = function(set){
				addressCheck = set ? true : false;
				isSubmit();
			}
			
			var isSubmit = function(){
				if (idCheck && idckCheck && pwckCheck && pwckcorCheck
						&& nameCheck && phoneCheck && mailCheck
						&& mailnumCheck && addressCheck) {	
					$("#join_form").attr("action", "/member/join");
					$("#join_form").submit();
				} else {
					return false;
				}
			}
			
			return {
				setidCheck : setidCheck,
				setidckCheck : setidckCheck,
				setpwckCheck : setpwckCheck,
				setpwckcorCheck : setpwckcorCheck,
				setnameCheck : setnameCheck,
				setphoneCheck : setphoneCheck,
				setmailCheck : setmailCheck,
				setmailnumCheck : setmailnumCheck,
				setaddressCheck : setaddressCheck,
				isSubmit: isSubmit
			}
		})();

		/*아이디 유효성 검사*/
		$(".id_input").focusout(function() {
			var id = $('.id_input').val();//id 입력란
			var msgBox = $(this).siblings(".msg_box");
			var regId = /^[A-Za-z0-9]{4,15}$/;

			if (id == "") {
				msgBox.text("아이디를 입력해주세요.");
				isSubmit.setidCheck(false);
			} else if (!regId.test(id)) {
				msgBox.text("아이디를 형식에 맞춰주세요.");
				isSubmit.setidCheck(false);
			} else {
				isSubmit.setidCheck(true);
			}
		});

		/*아이디 중복검사*/
		$('.Id_check_button').click("propertychange change keyup paste input",
				function() {

					var memberId = $('.id_input').val(); // .id_input에 입력되는 값
					var data = {
						memberId : memberId
					} // '컨트롤에 넘길 데이터 이름' : '데이터(.id_input에 입력되는 값)'
					var msgBox = $(this).siblings(".msg_box");

					$.ajax({
						type : "post",
						url : "/member/memberIdChk",
						data : data,
						success : function(result) {
							// console.log("성공 여부" + result);

							if (memberId == '') {
								msgBox.text("아이디를 입력해주세요.");
								msgBox.css({
									"color" : "red"
								});
								isSubmit.setidckCheck(false);

							} else if (result != 'fail') {
								msgBox.text("사용 가능한 아이디입니다.");
								msgBox.css({
									"color" : "green"
								});
								isSubmit.setidckCheck(false);

							} else {
								msgBox.text("아이디가 이미 존재합니다.");
								msgBox.css({
									"color" : "red"
								});
								isSubmit.setidckCheck(true);
							}
						}// success 종료
					}); // ajax 종료	

				});// function 종료		

		/*비밀번호 유효성 검사*/
		$(".pw_input").focusout(function() {
			var pwd = $('.pw_input').val();//비밀번호. 입력란
			var msgBox = $(this).siblings(".msg_box");
			if (pwd == "") {
				msgBox.text("비밀번호를 입력해주세요.");
				isSubmit.setpwckCheck(false);
			} else {
				isSubmit.setpwckCheck(true);
			}
		});

		/*비밀번호 확인 일치 유효성 검사*/

		$('.pwck_input').on("propertychange change keyup paste input",
				function() {

					var pw = $('.pw_input').val();
					var pwck = $('.pwck_input').val();

					$('.final_pwck_ck').css('display', 'none');

					if (pw == pwck) {
						$('.pwck_input_re_1').css('display', 'block');
						$('.pwck_input_re_2').css('display', 'none');
						isSubmit.setpwckcorCheck(true);
					} else {
						$('.pwck_input_re_1').css('display', 'none');
						$('.pwck_input_re_2').css('display', 'block');
						isSubmit.setpwckcorCheck(false);
					}
				});

		/*이름 유효성 검사*/
		$(".user_input").focusout(function() {
			var userName = $('.user_input').val();//이름 입력란
			var msgBox = $(this).siblings(".msg_box");
			if (userName == "") {
				msgBox.text("이름을 입력해주세요.");
				isSubmit.setnameCheck(false);
			} else {
				isSubmit.setnameCheck(true);
			}
		});

		/*전화번호 유효성 확인*/
		$(".phone_input").focusout(function() {
			var phone = $('.phone_input').val();//id 입력란
			var msgBox = $(this).siblings(".msg_box");
			var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

			if (phone == "") {
				msgBox.text("아이디를 입력해주세요.");
				isSubmit.setphoneCheck(false);
			} else if (!regPhone.test(phone)) {
				msgBox.text("휴대폰번호를 확인해 주세요.");
				isSubmit.setphoneCheck(false);
			} else {
				isSubmit.setphoneCheck(true);
			}
		});

		/*전화번호 길이*/
		function lenthCheck(e, length) {
			if (e.value.length >= length) {
				return false;
			}

			$(this).off().focusout(function() {
				if (e.value.length > length) {
					e.value = "";
				}
			})

			return true;
		}

		/*이메일 유효성 확인*/
		$(".mail_input").focusout(function() {
			var mail = $('.mail_input').val();//mail 입력란
			var msgBox = $(this).siblings(".msg_box");
							var regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

			if (mail == "") {
				msgBox.text("메일주소를 입력해주세요.");
				isSubmit.setmailCheck(false);
		    } else if (!regEmail.test(mail)) {
				msgBox.text("메일주소를 형식에 맞춰주세요.");
				isSubmit.setmailCheck(false);
			} else {
				isSubmit.setmailCheck(true);
				}
					});

		/* 인증번호 이메일 전송 */
		$(".mail_check_button").click(function() {
			var Email = $(".mail_input").val(); // 입력한 이메일
			var cehckBox = $(".mail_check_input"); // 인증번호 입력란
			var boxWrap = $(".mail_check_input_box"); // 인증번호 입력란 박스

			$.ajax({

				type : "GET",
				url : "mailCheck?Email=" + Email,
				success : function(data) {

					//console.log("data : " + data);
					cehckBox.attr("disabled", false);
					boxWrap.attr("id", "mail_check_input_box_true");
					code = data;

				}
			});

		});

		/* 인증번호 비교 */
		$(".mail_check_input").blur(function() {

			var inputCode = $(".mail_check_input").val(); // 입력코드    
			var checkResult = $("#mail_check_input_box_warn"); // 비교 결과   

			if (inputCode == code) { // 일치할 경우
				checkResult.html("인증번호가 일치합니다.");
				checkResult.attr("class", "correct");
				isSubmit.setmailnumCheck(true);
			} else { // 일치하지 않을 경우
				checkResult.html("인증번호를 다시 확인해주세요.");
				checkResult.attr("class", "incorrect");
				isSubmit.setmailnumCheck(false);
			}

		});
		
		/*주소 유효성 검사*/
		$(".address_input_3").focusout(function() {
			var addr1 = $('.address_input_1').val();//우편번호
			var addr2 = $('.address_input_2').val();//주소
			var addr3 = $('.address_input_3').val();//주소
			var msgBox = $(this).siblings(".msg_box");
			if (addr1 == "" && addr2 == "" && addr3 == "") {
				msgBox.text("주소를 입력해주세요.");
				isSubmit.setaddressCheck(false);
			} else if (addr3 == ""){
				msgBox.text("상세주소를 입력해주세요.");
				isSubmit.setaddressCheck(false);
			} else{
				isSubmit.setaddressCheck(true);
			}
		});

		/* 다음 주소 연동 */
		function execution_daum_address() {

			new daum.Postcode(
					{
						oncomplete : function(data) {
							// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
							// 각 주소의 노출 규칙에 따라 주소를 조합한다.
							// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
							var addr = ''; // 주소 변수
							var extraAddr = ''; // 참고항목 변수

							//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
							if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
								addr = data.roadAddress;
							} else { // 사용자가 지번 주소를 선택했을 경우(J)
								addr = data.jibunAddress;
							}

							// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
							if (data.userSelectedType === 'R') {
								// 법정동명이 있을 경우 추가한다. (법정리는 제외)
								// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
								if (data.bname !== ''
										&& /[동|로|가]$/g.test(data.bname)) {
									extraAddr += data.bname;
								}
								// 건물명이 있고, 공동주택일 경우 추가한다.
								if (data.buildingName !== ''
										&& data.apartment === 'Y') {
									extraAddr += (extraAddr !== '' ? ', '
											+ data.buildingName
											: data.buildingName);
								}
								// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
								if (extraAddr !== '') {
									extraAddr = ' (' + extraAddr + ')';
								}
								// 주소변수 문자열과 참고항목 문자열 합치기
								addr += extraAddr;

							} else {
								// 추가해야할 코드
								addr += ' ';
							}

							// 우편번호와 주소 정보를 해당 필드에 넣는다.
							$(".address_input_1").val(data.zonecode);
							//$("[name=Addr1]").val(data.zonecode);    // 대체가능
							$(".address_input_2").val(addr);
							//$("[name=Addr2]").val(addr);            // 대체가능
							// 상세주소 입력란 disabled 속성 변경 및 커서를 상세주소 필드로 이동한다.
							$(".address_input_3").attr("readonly", false);
							$(".address_input_3").focus();

						}
					}).open();
		}