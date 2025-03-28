# Business Canvas Assignment

- **과제 정보 :** 비즈니스캔버스 프론트엔드 개발자 채용 과제
- **내용 :** 회원 목록을 관리할 수 있는 테이블 구현
- **제출자 :** 노영주

## 실행 방법

```
npm install -g pnpm@latest-10
pnpm insall
```

- **개발 서버 실행 방법**

```
VITE_STORAGE=in-memory pnpm run dev
// or
VITE_STORAGE=local-storage pnpm run dev
```

- **`.env` 파일을 통한 저장 방식 설정**

```
touch .env
```

```
VITE_STORAGE=in-memory
# 또는
 VITE_STORAGE=local-storage
```

```
pnpm run dev
```

## Commit 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 관련 작업
style: 스타일
refactor: 코드 개선
chore: 라이브러리, 빌드 관련 작업
```

## 적용 기술

### 빌드 시스템

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

- `react-ts` 템플릿을 사용하였습니다.

### 스타일

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- 전역 스타일은 `src > global.css`로, 컴포넌트 별 스타일은 인라인 스타일로 관리하였습니다.

![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)

- 추가적으로 Icon 설정을 위한 `@ant-design/icons`, React v19 호환을 위한 `@ant-design/v5-patch-for-react-19`, DatePicker 반환값 가공을 위한 `dayjs`, id값 설정을 위한 `nanoid`를 설치하였습니다.

## 폴더 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂Pretendard
 ┃ ┃ ┃ ┣ 📜Pretendard-Regular.woff2
 ┃ ┃ ┃ ┗ 📜Pretendard-SemiBold.woff2
 ┃ ┃ ┗ 📜font.css
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Label.tsx
 ┃ ┣ 📜RecordForm.tsx
 ┃ ┣ 📜RowAction.tsx
 ┃ ┗ 📜ValidateFormModal.tsx
 ┣ 📂contexts
 ┃ ┣ 📜FormStateProvider.tsx
 ┃ ┣ 📜ModalProvider.tsx
 ┃ ┗ 📜StorageProvider.tsx
 ┣ 📂pages
 ┃ ┗ 📜UserList.tsx
 ┣ 📂types
 ┃ ┣ 📜constants.ts
 ┃ ┣ 📜field.ts
 ┃ ┗ 📜record.ts
 ┣ 📜App.tsx
 ┣ 📜global.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

| 폴더명 | 폴더 설명 |
| --- | --- |
| `📂 assets` | 프로젝트에서 사용하는 폰트 등의 정적 리소스를 저장합니다. |
| `📂 components` | 재사용되는 UI 컴포넌트를 저장하는 폴더입니다. |
| `📂 contexts` | React Context API를 활용하여 전역 상태를 관리하는 컴포넌트를 관리합니다. |
| `📂 pages` | UI 컴포넌트들의 조합으로 만들어진 페이지를 관리합니다. |
| `📂 types` | 타입 정의 파일과 관련된 상수 파일을 관리합니다. |
