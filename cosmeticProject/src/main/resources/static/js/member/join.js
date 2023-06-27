
var code = "";                //이메일전송 인증번호 저장위한 코드

$(document).ready(function() {
			//회원가입 버튼(회원가입 기능 작동)
			$(".join_button").click(function() {
				$("#join_form").attr("action", "/member/join");
				$("#join_form").submit();
			});
		}); 
		
/*아이디 중복검사*/
		$('.id_input').on(
				"propertychange change keyup paste input",
				function() {

					var memberId = $('.id_input').val(); // .id_input에 입력되는 값
					var data = {
						memberId : memberId
					} // '컨트롤에 넘길 데이터 이름' : '데이터(.id_input에 입력되는 값)'

					$.ajax({
						type : "post",
						url : "/member/memberIdChk",
						data : data,
						success : function(result) {
							// console.log("성공 여부" + result);
							if (result != 'fail') {
								$('.id_input_re_1').css("display",
										"inline-block");
								$('.id_input_re_2').css("display", "none");
							} else {
								$('.id_input_re_2').css("display",
										"inline-block");
								$('.id_input_re_1').css("display", "none");
							}
						}// success 종료
					}); // ajax 종료	

				});// function 종료			
					
/* 인증번호 이메일 전송 */
		$(".mail_check_button").click(function(){
		    var Email = $(".mail_input").val();            // 입력한 이메일
            var cehckBox = $(".mail_check_input");        // 인증번호 입력란
            var boxWrap = $(".mail_check_input_box");    // 인증번호 입력란 박스
            
		    $.ajax({
		        
		       type:"GET",
		       url:"mailCheck?Email=" + Email,
		       success:function(data){
		        
		         //console.log("data : " + data);
		         cehckBox.attr("disabled",false);
		         boxWrap.attr("id", "mail_check_input_box_true");
		         code = data;
		         
               }
		   });	
		
	     });		
	     
 
/* 인증번호 비교 */
$(".mail_check_input").blur(function(){
    
    var inputCode = $(".mail_check_input").val();        // 입력코드    
    var checkResult = $("#mail_check_input_box_warn");    // 비교 결과   
    
    if(inputCode == code){                            // 일치할 경우
        checkResult.html("인증번호가 일치합니다.");
        checkResult.attr("class", "correct");        
    } else {                                            // 일치하지 않을 경우
        checkResult.html("인증번호를 다시 확인해주세요.");
        checkResult.attr("class", "incorrect");
    }
    
});	  

/* 다음 주소 연동 */
function execution_daum_address(){
    
    new daum.Postcode({
        oncomplete: function(data) {
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
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
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
                $(".address_input_3").attr("readonly",false);
                $(".address_input_3").focus();
 
        }
    }).open();
    
}   

/*비밀번호 확인 일치 유효성 검사*/

		$('.pwck_input').on("propertychange change keyup paste input",
				function() {

					var pw = $('.pw_input').val();
					var pwck = $('.pwck_input').val();
					$('.final_pwck_ck').css('display', 'none');

					if (pw == pwck) {
						$('.pwck_input_re_1').css('display', 'block');
						$('.pwck_input_re_2').css('display', 'none');
						pwckcorCheck = true;
					} else {
						$('.pwck_input_re_1').css('display', 'none');
						$('.pwck_input_re_2').css('display', 'block');
						pwckcorCheck = false;
					}
				});
