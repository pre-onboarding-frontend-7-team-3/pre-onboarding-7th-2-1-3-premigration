# 원티드 프리온보딩 프론트엔드 3팀 - Assignment #3

> 목적 : B2C 차량대여 서비스를 제공하는 웹 사이트 구축
>
> 프로젝트 기간 : 2022년 11월 1일 ~ 2022년 11월 4일
>
> #### [배포링크](http://pre-onboarding-7th-2-1-3.s3-website.ap-northeast-2.amazonaws.com/)

</br>

## 📖 목차

- [실행 방법](#%EF%B8%8F-실행-방법)
- [협업 과정](#-협업-과정)
- [Best Practice 및 채택 근거](#%EF%B8%8F-best-practice-및-채택-근거)
- [팀 코드 컨벤션](#-팀-코드-컨벤션)
- [사용 기술](#-사용-기술)
- [폴더 구조](#폴더-구조)
- [팀원](#-팀원)

</br>

## ⌨️ 실행 방법

```jsx
$ git clone https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3.git
$ npm install
$ npm start
```

</br>

## 📃 협업 과정

본 프로젝트는 동료학습에 최적화된 과정을 찾아가며 진행했습니다. [VSC Live Code extension](<[https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)>)을 활용해서 라이브 코드 리뷰를 진행하고 각자 구현한 코드에 대한 피드백 및 리팩토링 후 `페어 프로그래밍` 방식으로 Best Practice를 채택했습니다.

1. VSC Live Share

- 개발 초기에 업무를 최대한 작은 단위로 나눈 뒤 같이 프로그래밍하는 방식의 개발 프로세스를 선택했습니다. 단순 화면 공유 기능을 사용했을 때는 동시에 작업을 하거나 다양한 피드백을 주고 받기 어려웠으나 익스텐션을 사용해서 실시간으로 코드를 작성하고 디버깅할 수 있어서 개발 기간을 단축시켰습니다.

</br>
    
2. husky를 이용해 commit전 lint 자동 검사

## ☑️ Best Practice 및 채택 근거

### 1. barrel 방식 / ~~~절대경로 지정  // 영훈님
- 개발 효율성과 생산성 향상
- barrel방식으로 폴더 구조를 구성하여 파일이름의 가독성 높이기
- jsconfig.json에 baseUrl을 지정하여 import시 경로의 가독성 높이기

<br/>

### 2. useReducer / useContext Hook
- 본 프로젝트에서 상태 관리 라이브러리의 제한은 없었으나 내장 API를 사용해서 구현하자는 공통된 의견이 있어 useReducer와 useContext 훅을 채택했습니다. 컴포넌트 단에서 여러 상태를 만들기 보다 컨포넌트 간 상태 공유가 가능하고 비동기 요청에 대한 과정과 결과 상태를 한 영역에서 관리할 수 있는 장점에 의견을 모았습니다. 더 작은 영역에서 확실한 책임을 지도록 커스텀 reducer와 context prodiver 컴포넌트로 로직을 분리해서 관리했습니다.
> 참고 폴더 [src/context](https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3/blob/main/src/context)
>

https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3/blob/edbcce232e4fa90438532c6ff59a991e1c6a74ab/src/helpers/useCarReducer.js#L1-L16

<br/>

### 3. Context API를 활용한 UI에 대한 정보와 데이터 
  - 팀원들과 모바일 환경에서 원활한 사용자 경험에 대한 의견을 공유한 결과 차량 상세 페이지에서 뒤로 가기를 눌렀을 때 직전에 선택한 카테고리, 스크롤 위치 및 데이터가 출력되게 구현했습니다. 초기에는 기능 별로 사용될 상태를 컴포넌트 단에서 선언하고 관리했으나 context API를 채택해서 선택된 카테고리 상태, 네비게이션 ref에 대한 스크롤 위치 정보 및 차량 목록에 대한 데이터를 관리했습니다.

https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3/blob/b084a35634c7679f0693aa6a451444e47d1cf427/src/context/NavContext.js#L1-L24

<br/>

### 4. SEO - 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출
- 초기 순수 CRA환경에서 벽을 맞이했습니다. react-hook을 통한 og태그 관련 DOM조작과 react-snap 라이브러리를 통한 pre-render를 사용해보았습니다. 
비구글 검색엔진에 대하여 SEO crawlling은 가능하게 하였지만, 두 방법 모두 Open Graph에 동적 대응할 수 없었습니다. 
추가 구현사항을 구현하기 위해서는 next.js로의 마이그레이션이 필요하다고 판단했습니다.

```jsx
export const useMetaTegs = (TitleofMetaTegs) => {
  const [metaTegs, setMetaTegs] = useState(TitleofMetaTegs);
  const updateMetaTags = () => {
    document.querySelector('meta[property="og:description"]').setAttribute('content', TitleofMetaTegs);
    document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);
  };

  useEffect(updateMetaTags, [metaTegs]);
  return setMetaTegs;
};
```

<br/>

### 5. next.js 마이그레이션
- Server Side Rendering, Automatic Routing, Automatic Code Splitting등의 장점을 가진 Next.js. 
SEO 관련 사항 중 Open Graph를 구현하기위해 마이그레이션을 진행했다.
- 찾아보니 _App.js에서 SEO처리를 함을 확인했다. 다만, DefaultSEO를 사용하면 그 외의 페이지에서 NextSEO를 통한 동적 SEO의 구현이 먹통이 되는 경우가 발생한다. 
이를 해결하기 위해 getStaticProps로 _App.js에 pageProps로 데이터를 넘기고 경우에 따라 적당한 SEO(open graph)가 들어갈 수 있도록 처리하였다.

```jsx
// [id].jsx
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch("https://preonboarding.platdev.net/api/cars", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());

  return {
    props: res.payload.filter((e) => {
      return e.id === Number(params.id);
    })[0],
  };
}
```

```jsx
// _App.jsx
function MyApp({ Component, pageProps }) {
  const isEmptyObj = (obj) => {
    if (obj.constructor === Object && Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  };

  return (
    <>
        { /* ... */ }
        
      {isEmptyObj(pageProps) ? (
        <DefaultSeo {...DEFAULT_SEO} />
      ) : (
        <SEO data={pageProps} />
      )}
      
        { /* ... */ }
    </>
  );
}

export default MyApp;
```

<br/>

### 6. 반응형 모바일 웹
- 모바일 디바이스의 크기(450px~360px)에 따라 UI가 출력되도록 구현하고자 react-responsive 라이브러리를 사용했습니다. 개발 기간이 길지 않아 개발 생태계가 잘 형성돼있고 어려움 없이 도입할 수 있다는 이유를 근거로 채택했습니다.

  https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3/blob/b084a35634c7679f0693aa6a451444e47d1cf427/src/App.jsx#L1-L35

<br/>

### 7. 상수 데이터의 활용
  - live share 중 UI 구성에 필요한 정적인 데이터가 하드 코딩 돼있어 가독성이 떨어진다는 의견을 공유했습니다. 반복문을 통해서 코드를 간결하게 정리할 수 있는 데이터는 상수화 처리를 했고 재상용성과 추후 유지보수를 고려해서 [/constants](https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3/tree/b084a35634c7679f0693aa6a451444e47d1cf427/src/constants) 디렉토리에서 모두 관리 했습니다.
  
  https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3/blob/472394ea9883a7f3ed198bbb9e12c7c57fa3f6e9/src/components/CarDetail/CarDetail.jsx#L1-L49
  
</br>

## 🔒 팀 코드 컨벤션

- [ ] git commit message 컨벤션

| 커밋명   | 내용                                        |
| -------- | ------------------------------------------- |
| feat     | 파일, 폴더, 새로운 기능 추가                |
| fix      | 버그 수정                                   |
| docs     | 제품 코드 수정 없음                         |
| style    | 코드 형식, 정렬, 주석 등의 변경             |
| refactor | 코드 리팩토링                               |
| test     | 테스트 코드 추가                            |
| chore    | 환경설정, 빌드 업무, 패키지 매니저 설정등.. |
| hotfix   | 치명적이거나 급한 버그 수정                 |

- [ ] branch 컨벤션

| 브랜치명 | 내용                         |
| -------- | ---------------------------- |
| develop  | 파일, 폴더, 새로운 기능 추가 |
| fix      | 버그 수정                    |
| docs     | 제품 코드 수정 없음          |
| refactor | 코드 리팩토링                |
| hotfix   | 치명적이거나 급한 버그 수정  |

</br>

## 🔨 사용 기술

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white"/> <img alt="React" src ="https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white"/> <img alt="NextJS" src ="https://img.shields.io/badge/Next.js-000000?&style=flat&logo=Next.js&logoColor=white"/>

<img alt="Axios" src ="https://img.shields.io/badge/Axios-5A29E4?&style=flat&logo=Axios&logoColor=white"/> <img alt="styled-components" src ="https://img.shields.io/badge/styled components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> <img alt="react-responsive" src ="https://img.shields.io/badge/react responsive-000000?&style=flat&logoColor=white"/>

<img alt="Git" src ="https://img.shields.io/badge/Git-F05032?&style=flat&logo=Git&logoColor=white"/> <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717?&style=flat&logo=GitHub&logoColor=white"/> <img alt="Notion" src ="https://img.shields.io/badge/Notion-000000?&style=flat&logo=Notion&logoColor=white"/>

</br>

## 📦 폴더 구조

```
📂 src
├── 📂 apis // 차량 리스트를 불러오는 api 관리
├── 📂 components // 컴포넌트 관리
│   ├── 📂 common // 재사용되는 컴포넌트 관리
│   │   ├── 📂 svgs // svg를 함수형으로 분리하여 관리
│   │   ├── 📄 BackButton // 뒤로 가기 버튼
│   │   ├── 📄 Button // props로 스타일을 받아 커스텀하여 사용할 수 있는 버튼
│   │   ├── 📄 Icon // props로 아이콘 이름을 받아 svg를 꺼내 사용할 수 있는 컴포넌트
│   │   ├── 📄 Loading // 데이터가 응답되기 전에 로딩중 텍스트를 보여주는 컴포넌트
│   │   └── 📄 NoData // 보여줄 데이터가 없을 때 텍스트를 보여주는 컴포넌트
│   ├── 📂 CarDetail // 차량 상세 페이지에 사용되는 컴포넌트
│   ├── 📂 CarListItem // 차량 리스트에 사용되는 하나의 차량 정보에 대한 컴포넌트
│   ├── 📂 CarList // 차량 리스트 컴포넌트
│   ├── 📂 Header // 페이지 제목을 나타내는 컴포넌트
│   └── 📂 Nav // 차량 카테고리 컴포넌트
├── 📂 constants // 상수 관리
├── 📂 context // context API 관리
│   ├── 📄 CarContext // 차량 정보 관련 Context
│   └── 📄 NavContext // 차량 카테고리 관련 Context
├── 📂 helpers // reducer 관리
│   └── 📄 useCarReducer
├── 📂 utils // 공통적으로 사용되는 util 함수 관리
│   ├── 📄 formatAttribute // api를 통해 제공받는 차량정보 한글로 변경
│   ├── 📄 CarInfoConverter // api를 통해 제공받는 차량정보 한글로 변경
│   ├── 📄 dateParse // api를 통해 제공받는 날짜정보 출력
│   └── 📄 isNewCar // 신규 차량인지 확인하는 함수
├── 📂 pages // 페이지 관리
│   ├── 📂 detail
│   │   └── 📄 [id].js
│   ├── 📄 _app
│   ├── 📄 _document
│   ├── 📄 _error
│   └── 📄 index
└── 📂 styles // global style 적용
    ├── 📄 GlobalStyle
    └── 📄 Theme
```

</br>

## 👨‍👩‍👧‍👦 팀원

| 조은지<br/>(팀장)                                                                                                | 고영훈<br/>(서기)                                                                                               | 김창희<br/>(팀원)                                                                                               | 박정민<br/>(팀원)                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/95282989?s=96&v=4" alt="Joeunji0119" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/65995664?s=96&v=4" alt="YeonghunKO" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/45018724?s=96&v=4" alt="PiperChang" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/55550034?s=96&v=4" alt="ono212" width="100" height="100"> |
| [Joeunji0119](https://github.com/Joeunji0119)                                                                    | [YeonghunKO](https://github.com/YeonghunKO)                                                                     | [PiperChang](https://github.com/PiperChang)                                                                     | [ono212](https://github.com/ono212)                                                                         |

| 문지원<br/>(팀원)                                                                                                | 이상민<br/>(팀원)                                                                                               | 이지원<br/>(팀원)                                                                                               | 조수진<br/>(팀원)                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/78708082?s=96&v=4" alt="moonkorea00" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/28257740?s=96&v=4" alt="dltkdals224" with="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/86206374?s=96&v=4" alt="365supprot" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/110365677?v=4" alt="suzz-in" width="100" height="100"> |
| [moonkorea00](https://github.com/moonkorea00)                                                                    | [dltkdals224](https://github.com/dltkdals224)                                                                   | [365support](https://github.com/365support)                                                                     | [suzz-in](https://github.com/suzz-in)                                                                    |
