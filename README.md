Here’s the updated README.md with the revised folder structure:

---

# CloneCode Project

## 프로젝트 기본 정보
이 프로젝트는 React.js를 사용하여 클론 코딩을 진행하는 웹 애플리케이션입니다. 기본적인 웹 애플리케이션 기능을 구현하면서 React의 구조와 컴포넌트화된 설계를 배우는 것을 목표로 합니다. 이 프로젝트는 웹 개발에 대한 이해도를 높이기 위한 학습 목적의 프로젝트입니다.

## 기술 스택
- **Frontend**: 
  - **React.js**: 사용자 인터페이스를 구성하기 위한 라이브러리
  - **JavaScript**: 기능 구현을 위한 프로그래밍 언어
  - **HTML/CSS**: 웹 페이지의 구조와 스타일링
- **Backend**: 없음 (프론트엔드만 구현)
- **기타**:
  - **npm**: 패키지 관리 도구
  - **Create React App**: React 애플리케이션 템플릿을 위한 도구

## 설치 및 실행 가이드

### 1. 프로젝트 클론
GitHub에서 이 프로젝트를 클론합니다.
```bash
git clone https://github.com/mytime501/clonekakao.git
```

### 2. 의존성 설치
프로젝트 디렉터리로 이동 후, npm을 사용하여 필요한 의존성들을 설치합니다.
```bash
cd clonecode
npm install
```

### 3. 개발 서버 실행
개발 서버를 실행하여 애플리케이션을 로컬에서 확인할 수 있습니다.
```bash
npm start
```
브라우저에서 `http://localhost:3000`을 열어 프로젝트를 확인합니다.

## 프로젝트 폴더 구조 설명

```
clonecode/
├── public/                 # 정적 파일들이 저장되는 폴더 (HTML, 이미지 등)
│   ├── favicon.ico         # 파비콘
│   ├── index.html          # HTML 템플릿 파일
│   ├── logo192.png         # 로고 이미지
│   ├── logo512.png         # 512px 로고 이미지
│   ├── manifest.json       # 웹 애플리케이션의 메타데이터
│   └── robots.txt          # 검색엔진 크롤러를 위한 파일
├── src/                    # 애플리케이션의 소스 코드 폴더
│   ├── components/         # React 컴포넌트 폴더
│   │   ├── Button.jsx      # 버튼 컴포넌트
│   │   ├── CheckboxField.jsx # 체크박스 필드 컴포넌트
│   │   ├── FilterBar.jsx   # 필터 바 컴포넌트
│   │   ├── Header.jsx      # 헤더 컴포넌트
│   │   ├── InfiniteScrollView.jsx # 무한 스크롤 뷰 컴포넌트
│   │   ├── InputField.jsx  # 입력 필드 컴포넌트
│   │   ├── MovieCard.jsx   # 영화 카드 컴포넌트
│   │   ├── MovieCarousel.jsx # 영화 캐러셀 컴포넌트
│   │   ├── MovieList.jsx   # 영화 목록 컴포넌트
│   │   ├── Pagination.jsx  # 페이지네이션 컴포넌트
│   │   ├── ScrollToTopButton.jsx # 스크롤 상단 버튼 컴포넌트
│   │   ├── SearchResults.jsx # 검색 결과 컴포넌트
│   │   └── TableView.jsx   # 테이블 뷰 컴포넌트
│   ├── css/                # 스타일 시트 폴더
│   │   ├── auth.css        # 인증 페이지 스타일
│   │   ├── home.css        # 홈 페이지 스타일
│   │   ├── movieCarousel.css # 영화 캐러셀 스타일
│   │   ├── popular.css     # 인기 페이지 스타일
│   │   └── search.css      # 검색 페이지 스타일
│   ├── pages/              # 페이지 구성 요소 폴더
│   │   ├── Auth.jsx        # 카카오 로그인 토큰 인증
│   │   ├── Home.jsx        # 홈 페이지
│   │   ├── Popular.jsx     # 인기 페이지
│   │   ├── Signin.jsx      # 로그인 페이지
│   │   ├── Wishlist.jsx    # 찜 목록 페이지
│   │   └── Search.jsx      # 검색 페이지
│   ├── App.css             # 앱 전역 스타일
│   ├── App.js              # 메인 앱 컴포넌트
│   ├── App.test.js         # 앱 테스트 파일
│   └── index.js            # 애플리케이션 진입점
├── .gitignore              # Git이 무시할 파일/폴더 지정
├── package.json            # 프로젝트 메타 정보와 의존성 관리 파일
└── README.md               # 이 파일
```

- **public/**: 애플리케이션에서 사용하는 정적 파일들이 위치하는 폴더입니다.
- **src/**: React 소스 코드가 저장되는 폴더로, 각종 컴포넌트와 스타일 시트를 포함합니다.
  - **components/**: 재사용 가능한 UI 컴포넌트를 모아둔 폴더입니다.
  - **css/**: 각 페이지 및 컴포넌트에 대한 스타일링을 관리하는 CSS 파일들입니다.
  - **pages/**: 애플리케이션의 주요 페이지 컴포넌트들이 위치한 폴더입니다.
- **package.json**: 프로젝트의 의존성과 빌드 정보를 관리하는 파일입니다.

--- 

이 구조는 프로젝트의 주요 디렉터리와 파일을 구체적으로 설명하며, 각 파일의 역할을 명확히 제시하고 있습니다.
