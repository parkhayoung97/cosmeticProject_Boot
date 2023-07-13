package com.ha.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ha.dto.JoinDTO;
import com.ha.service.MemberService;

@Controller
@RequestMapping(value = "/member")
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	@Autowired
	private MemberService memberservice;

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private BCryptPasswordEncoder pwdEncoder;

	// 회원가입 페이지 이동
	@GetMapping("/join")
	public void joinGET() {

		logger.info("회원가입 페이지 진입");

	}

	// 로그인 페이지 이동
	@GetMapping("/login")
	public void loginGET() {

		logger.info("로그인 페이지 진입");

	}

	// 로그인
	@PostMapping("/login")
	public String login(HttpServletRequest request, HttpSession session) {
		String referer = (String) request.getHeader("referer");
		session.setAttribute("referer", referer);
		return "member/login";
	        
	}

	// 회원가입
	@PostMapping("/join")
	public String joinPOST(@Valid JoinDTO memberDto, BindingResult bindingResult, Model model) throws Exception {

		logger.info("join 진입");

		if (bindingResult.hasErrors()) {

			logger.info("에러");

			List<FieldError> list = bindingResult.getFieldErrors();
			Map<String, String> errorMsg = new HashMap<>();

			for (int i = 0; i < list.size(); i++) {
				String field = list.get(i).getField();
				String message = list.get(i).getDefaultMessage();
				errorMsg.put(field, message);
			}
			model.addAttribute("errorMsg", errorMsg);
			logger.info("회원가입 실패");
			return "/join";
		}
		// 회원가입 서비스 실행
		String encPwd = pwdEncoder.encode(memberDto.getMemberPw());
		memberDto.setMemberPw(encPwd);
		memberservice.memberJoin(memberDto);
		logger.info("회원가입 성공");
		return "redirect:/member/login";

	}

	@PostMapping("/memberIdChk")
	@ResponseBody
	public String memberIdChkPOST(String memberId) throws Exception {

		logger.info("memberIdChk() 진입");

		int result = memberservice.idCheck(memberId);

		logger.info("결과값 = " + result);

		if (result != 0) {

			return "fail"; // 중복 아이디가 존재

		} else {

			return "success"; // 중복 아이디 x

		}
	}

	/* 이메일 인증 */
	@GetMapping("/mailCheck")
	@ResponseBody
	public String mailCheckGET(String Email) throws Exception {

		/* 뷰(View)로부터 넘어온 데이터 확인 */
		logger.info("이메일 데이터 전송 확인");
		logger.info("인증번호 : " + Email);

		/* 인증번호(난수) 생성 */
		Random random = new Random();
		int checkNum = random.nextInt(888888) + 111111;
		logger.info("인증번호 " + checkNum);

		/* 이메일 보내기 */
		String setFrom = "pakhayoung97@naver.com";
		String toMail = Email;
		String title = "회원가입 인증 이메일 입니다.";
		String content = "홈페이지를 방문해주셔서 감사합니다." + "<br><br>" + "인증 번호는 " + checkNum + "입니다." + "<br>"
				+ "해당 인증번호를 인증번호 확인란에 기입하여 주세요.";

		try {

			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
			helper.setFrom(setFrom);
			helper.setTo(toMail);
			helper.setSubject(title);
			helper.setText(content, true);
			mailSender.send(message);

		} catch (Exception e) {
			e.printStackTrace();
		}

		String num = Integer.toString(checkNum);

		return num;
	}

}
