import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Auth = () => {
  const navigate = useNavigate();
  const isTokenRequested = useRef(false); // 요청 중복 방지를 위한 플래그

  // TMDb API 키 유효성 확인 함수
  const validateApiKey = async (apiKey) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${apiKey}`);
      if (response.ok) {
        return true;  // 유효한 API 키
      } else {
        return false;  // 유효하지 않은 API 키
      }
    } catch (err) {
      console.error("API오류 :", err);
      alert("API 처리 중 오류가 발생했습니다.");
      return false;  // API 요청 실패 시 유효하지 않은 키로 간주
    }
  };


  useEffect(() => {
    const getKakaoToken = async () => {
      if (isTokenRequested.current) return; // 이미 요청된 경우 실행 중단
      isTokenRequested.current = true; // 요청 중복 방지 플래그 설정

      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) {
        console.error("인증 코드가 없습니다.");
        alert("인증 코드가 없습니다. 다시 시도해주세요.");
        navigate("/signin");
        return;
      }

      console.log("카카오 인증 코드: ", code);

      try {
        const response = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          null,
          {
            params: {
              grant_type: "authorization_code",
              client_id: process.env.REACT_APP_KAKAO_API_KEY,
              redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
              code,
            },
          }
        );

        console.log("카카오 토큰 응답: ", response.data);

        const { access_token } = response.data;

        if (!access_token) {
          console.error("토큰을 받아오지 못했습니다.");
          alert("토큰을 받아오지 못했습니다.");
          navigate("/signin");
          return;
        }

        const userInfoResponse = await axios.get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        console.log("사용자 정보 응답: ", userInfoResponse.data);

        const userInfo = userInfoResponse.data.kakao_account.profile;

        const token = process.env.REACT_APP_Token_KEY; 
        const password = process.env.REACT_APP_Movie_API_KEY;

        localStorage.setItem("kakaoAccessToken", access_token);
        localStorage.setItem("userInfomation", JSON.stringify({
          nickname: userInfo.nickname,
          profile_img: userInfo.profile_image_url,
        }));

        sessionStorage.setItem("token", token);  // Remember Me 미체크 시 sessionStorage에 저장
        
        if(validateApiKey(password))
        {
          localStorage.setItem("isAuthenticated", JSON.stringify({ password }));
        }
        navigate("/home");
      } catch (error) {
        console.error("카카오 콜백 오류:", error);
        alert("카카오 로그인 처리 중 오류가 발생했습니다.");
        navigate("/signin");
      }
    };

    getKakaoToken();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Auth;
