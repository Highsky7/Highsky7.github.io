# Highsky's Portfolio Website

[![Playwright Tests](https://github.com/Highsky7/Highsky7.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/Highsky7/Highsky7.github.io/actions/workflows/ci.yml)

안녕하세요! 이것은 AI/ML 연구자이자 개발자인 Highsky의 프리미엄 포트폴리오 웹사이트입니다.

## ✨ 주요 특징

- 🎨 **프리미엄 디자인**: 글래스모피즘, 그라디언트, 부드러운 애니메이션
- 🌓 **다크/라이트 모드**: localStorage 기반 테마 전환
- 📱 **완벽한 반응형**: 모바일, 태블릿, 데스크톱 최적화
- ⚡ **마이크로 인터랙션**: 스크롤 애니메이션, 호버 효과
- ✅ **E2E 테스트**: Playwright를 활용한 자동화 테스트
- 🔍 **SEO 최적화**: 메타 태그, 시맨틱 HTML

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Google Fonts (Inter, Outfit)
- **Testing**: Playwright, ESLint, Prettier
- **Hosting**: GitHub Pages

## 📂 프로젝트 구조

```
Highsky7.github.io/
├── index.html              # 메인 HTML 파일
├── styles.css              # 스타일시트
├── script.js               # JavaScript 로직
├── assets/                 # 자산 파일
│   ├── profile.jpg         # 프로필 사진 (추가 필요)
│   ├── cv.pdf              # 이력서 PDF (추가 필요)
│   └── favicon.ico         # 파비콘
├── tests/
│   └── e2e/
│       └── portfolio.spec.js  # E2E 테스트
├── package.json            # Node.js 설정
├── playwright.config.js    # Playwright 설정
├── .eslintrc.json          # ESLint 설정
├── .prettierrc             # Prettier 설정
└── README.md               # 이 파일
```

## 🚀 로컬 개발 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/Highsky7/Highsky7.github.io.git
cd Highsky7.github.io
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 로컬 서버 실행

```bash
npm run serve
```

브라우저에서 `http://localhost:8000` 접속

## 🎨 개인정보 커스터마이징

웹사이트를 본인의 정보로 커스터마이징하려면 다음 단계를 따르세요:

### 1. 프로필 사진 및 CV 추가

```bash
# assets 디렉토리 생성 (없는 경우)
mkdir -p assets

# 본인의 프로필 사진을 assets/profile.jpg로 복사
cp /path/to/your/photo.jpg assets/profile.jpg

# 본인의 CV PDF를 assets/cv.pdf로 복사
cp /path/to/your/cv.pdf assets/cv.pdf
```

### 2. index.html 수정

`index.html` 파일에서 `<!-- TODO: -->` 주석이 있는 부분을 찾아 수정하세요:

- **Line 111-112**: LinkedIn 프로필 URL
- **Line 120-121**: GitHub 사용자명
- **Line 129-130**: 이메일 주소
- **Line 144-145**: 직함 (예: "AI/ML Researcher")
- **Line 152-157**: 자기소개 텍스트
- **Line 197-205**: About Me 섹션 내용
- **Line 211-220**: 기술 스택
- **Line 235-269**: 경력 사항
- **Line 280-311**: 프로젝트 정보
- **Line 328-343**: Contact 섹션

### 3. 색상 변경 (선택사항)

`styles.css` 파일의 `:root` 섹션에서 색상을 변경할 수 있습니다:

```css
:root {
  --color-primary: hsl(240, 100%, 60%); /* 메인 색상 */
  --color-secondary: hsl(280, 100%, 65%); /* 보조 색상 */
  /* ... */
}
```

## 🧪 테스트 실행

### ESLint (코드 품질 검사)

```bash
# 검사
npm run lint

# 자동 수정
npm run lint:fix
```

### Prettier (코드 포맷팅)

```bash
# 검사
npm run format:check

# 자동 포맷팅
npm run format
```

### Playwright E2E 테스트

```bash
# 전체 테스트 실행
npm run test:e2e

# UI 모드로 실행 (시각적)
npm run test:e2e:ui

# 디버그 모드
npm run test:e2e:debug

# 테스트 리포트 보기
npm run test:e2e:report
```

### 전체 테스트 스위트

```bash
npm run test:all
```

## 📊 테스트 커버리지

현재 E2E 테스트는 다음을 검증합니다:

- ✅ 페이지 로딩 및 기본 구조
- ✅ 다크/라이트 모드 전환 및 localStorage 저장
- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 모바일 메뉴 토글
- ✅ 네비게이션 및 스크롤
- ✅ 외부 링크 (target="\_blank", rel="noopener")
- ✅ CV 다운로드 버튼
- ✅ 스크롤 애니메이션
- ✅ 접근성 (alt 텍스트, aria-label)
- ✅ SEO 기본 요소 (메타 태그, heading 구조)
- ✅ 기본 성능 (로딩 시간, 리소스)

## 🌐 GitHub Pages 배포

### 자동 배포 (GitHub Actions)

`main` 브랜치에 push하면 자동으로 배포됩니다:

```bash
git add .
git commit -m "feat: 포트폴리오 웹사이트 구현"
git push origin main
```

### 수동 배포

1. GitHub repository 설정으로 이동
2. **Settings** → **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: `main` / `root`
5. **Save**

몇 분 후 `https://highsky7.github.io`에서 확인 가능

## 📝 개발 워크플로우

```bash
# 1. 코드 작성
vim index.html script.js styles.css

# 2. 포맷팅
npm run format

# 3. Lint 검사
npm run lint:fix

# 4. 로컬 서버에서 확인
npm run serve

# 5. E2E 테스트
npm run test:e2e

# 6. Git commit & push
git add .
git commit -m "feat: 새로운 기능 추가"
git push origin main
```

## 🤝 기여

이 프로젝트는 개인 포트폴리오이지만, 제안이나 버그 리포트는 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

## 👤 연락처

- **LinkedIn**: [yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub**: [@Highsky7](https://github.com/Highsky7)
- **Email**: your.email@example.com

## 🙏 감사의 말

- [Google Fonts](https://fonts.google.com/) - Inter & Outfit 폰트
- [Playwright](https://playwright.dev/) - E2E 테스트 프레임워크
- [ESLint](https://eslint.org/) - JavaScript 린터
- [Prettier](https://prettier.io/) - 코드 포맷터

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
