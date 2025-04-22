# Pawong - 유기동물 검색 및 매칭 플랫폼

Pawong은 유기동물을 검색하고 입양을 신청할 수 있는 웹 플랫폼입니다. 사용자들은 쉽게 유기동물을 검색하고, 상세 정보를 확인하며, 입양을 신청할 수 있습니다.

## 프로젝트 구조

```
src/
├── assets/           # 정적 파일 (이미지, 폰트 등)
├── components/       # 재사용 가능한 UI 컴포넌트
│   ├── common/      # 공통 컴포넌트 (버튼, 인풋 등)
│   ├── layout/      # 레이아웃 관련 컴포넌트
│   └── pet/         # 펫 관련 특화 컴포넌트
├── pages/           # 페이지 컴포넌트
├── hooks/           # 커스텀 훅
├── services/        # API 서비스
└── contexts/        # React Context (사용자 인증 등)
```

### 디렉토리 설명

- **assets/**: 프로젝트에서 사용되는 모든 정적 파일을 저장합니다.
  - 이미지
  - 아이콘
  - 폰트
  - 기타 미디어 파일

- **components/**: 재사용 가능한 UI 컴포넌트들을 저장합니다.
  - **common/**: 버튼, 인풋, 모달 등 기본적인 UI 컴포넌트
  - **layout/**: 헤더, 푸터, 사이드바 등 레이아웃 관련 컴포넌트
  - **pet/**: 펫 카드, 펫 상세 정보 등 펫 관련 특화 컴포넌트

- **pages/**: 실제 라우팅되는 페이지 컴포넌트들을 저장합니다.
  - 홈페이지
  - 유기동물 검색 페이지
  - 입양 신청 페이지
  - 로그인/회원가입 페이지

- **hooks/**: 재사용 가능한 커스텀 훅을 저장합니다.
  - API 호출 관련 훅
  - 폼 처리 관련 훅
  - 기타 공통 로직

- **services/**: API 통신 관련 로직을 저장합니다.
  - API 엔드포인트 정의
  - API 호출 함수
  - 에러 처리

- **contexts/**: React Context를 사용한 전역 상태 관리를 저장합니다.
  - 사용자 인증 상태 관리
  - 기타 전역 상태

## 시작하기

### 필수 조건

- Node.js (v18 이상)
- npm 또는 yarn

### 설치

1. 저장소 클론
```bash
git clone [repository-url]
cd pawong-frontend
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

개발 서버가 실행되면 [http://localhost:5004](http://localhost:5004)에서 애플리케이션을 확인할 수 있습니다.

### 빌드

```bash
npm run build
# 또는
yarn build
```

빌드된 파일은 `dist` 디렉토리에 생성됩니다.

## 기여하기

1. 이슈 생성
2. 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add some amazing feature'`)
4. 브랜치 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.