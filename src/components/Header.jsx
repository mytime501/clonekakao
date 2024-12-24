import React, { useState, useEffect } from 'react';
import '../css/home.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [scrolling, setScrolling] = useState(false); // 스크롤 상태 관리
  const [showProfileMenu, setShowProfileMenu] = useState(false); // 프로필 메뉴 토글 상태
  const [userName, setUserName] = useState(); // 사용자 이름 상태

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfomation"));
    setUserName(storedUser.nickname); // 'users' 객체 안의 'id' 값을 가져옴
  }, []);

  // 예시로 로컬스토리지에서 사용자 이름을 가져옴 (로그인 정보에 따라 다를 수 있음)
  
  // 스크롤 이벤트 처리
  const handleScroll = () => {
    if (window.scrollY > 50) { // 스크롤이 50px 이상일 때
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // useEffect를 사용하여 스크롤 이벤트를 처리
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, []);

  // 프로필 메뉴 토글 함수
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&logout_redirect_uri=${process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI}`;
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("kakaoAccessToken");
    localStorage.removeItem("userInfomation");
    localStorage.removeItem("isAuthenticated");
    setShowProfileMenu(false); // 메뉴 닫기
    navigate("/Signin"); // 로그인 페이지로 이동
  };

  return (
    <header className={`header ${scrolling ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* 로고 */}
        <div className="logo">
          <i 
            className="fas fa-video logo-icon" 
            onClick={() => navigate("/")}
            aria-label="logo"
          ></i>
        </div>

        {/* 메뉴 항목 */}
        <nav className="nav-menu">
          <Link to="/home" className="nav-item">
            홈
          </Link>
          <Link to="/popular" className="nav-item">
            대세 콘텐츠
          </Link>
          <Link to="/search" className="nav-item">
            찾아보기
          </Link>
          <Link to="/wishlist" className="nav-item">
            내가 찜한 리스트
          </Link>
        </nav>

        {/* 프로필 아이콘 */}
        <div className="profile-icon">
          <i 
            className="fas fa-user profile-icon-style"  
            onClick={toggleProfileMenu} // 프로필 메뉴 토글
            aria-label="user"
          ></i>
          
          {/* 프로필 메뉴 */}
          {showProfileMenu && (
            <div className="profile-menu">
              <div className="profile-username">{userName}</div> {/* 사용자 아이디 */}
              <button onClick={handleLogout} className="logout-button">로그아웃</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
