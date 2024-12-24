import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/auth.css';
import Button from '../components/Button';

const Signin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  // 카카오 로그인 처리
  const handleKakaoLogin = () => {
    try {
      const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=http://mytime501.github.io/clonekakao/auth`;

      console.log(process.env.REACT_APP_KAKAO_API_KEY);
      console.log(process.env.REACT_APP_KAKAO_REDIRECT_URI);
      // 카카오 인증 페이지로 리디렉션
      window.location.href = KAKAO_AUTH_URL;
    } catch (error) {
      console.error("Kakao Login Error:", error);
      setErrorMessage("카카오 로그인 중 오류가 발생했습니다.");

      // Show a toast notification for network errors
      toast.error("네트워크 오류가 발생했습니다. 다시 시도해주세요.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="auth-container">
      <div className={`auth-card`}>
        <div className="auth-front">
          <Button onClick={handleKakaoLogin}>   
                     
          </Button>
        </div>
        
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};
export default Signin;
