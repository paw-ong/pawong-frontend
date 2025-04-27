import React from "react";
import './Login.css';
import kakaoLoginBtn from '../assets/images/login/kakao_large.png'


function Login() {
  const KAKAO_CONFIG = {
    REST_API_KEY: import.meta.env.REST_API_KEY,
    REDIRECT_URI: import.meta.env.REDIRECT_URI
  };

  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CONFIG.REST_API_KEY}&redirect_uri=${KAKAO_CONFIG.REDIRECT_URI}`;

  return (
      <div className="login-container">
        <div className="login-box">
          <p className="login-title">포옹에 오신 것을 환영합니다!</p>

          <a href={KAKAO_LOGIN_URL} className="kakao-login-link">
            <img src={kakaoLoginBtn} alt="카카오 로그인" className="kakao-login-btn" />
          </a>
        </div>
      </div>
  );
}

export default Login;