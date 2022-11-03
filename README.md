# 원티드 프리온보딩 프론트엔드 3팀 - 2weeks - 1

> 목적 : B2C 차량대여 서비스를 제공하는 웹 사이트 구축
>
> 프로젝트 기간 : 2022년 11월 1일 ~ 2022년 11월 4일
>
> #### [배포링크](http://pre-onboarding-7th-2-1-3.s3-website.ap-northeast-2.amazonaws.com/)

</br>

## 📖 목차

- [실행 방법](notion://www.notion.so/fa94d6048d2047588e23d9ac118ba55a?p=2de19840ab974b45b297096b95590ef3&showMoveTo=true&saveParent=true#%EF%B8%8F-%EC%8B%A4%ED%96%89-%EB%B0%A9%EB%B2%95)
- [협업 과정](notion://www.notion.so/fa94d6048d2047588e23d9ac118ba55a?p=2de19840ab974b45b297096b95590ef3&showMoveTo=true&saveParent=true#-%ED%98%91%EC%97%85-%EA%B3%BC%EC%A0%95)
- [Best Practice 및 채택 근거](notion://www.notion.so/fa94d6048d2047588e23d9ac118ba55a?p=2de19840ab974b45b297096b95590ef3&showMoveTo=true&saveParent=true#%EF%B8%8F-best-practice-%EB%B0%8F-%EC%B1%84%ED%83%9D-%EA%B7%BC%EA%B1%B0)
- [팀 코드 컨벤션](notion://www.notion.so/fa94d6048d2047588e23d9ac118ba55a?p=2de19840ab974b45b297096b95590ef3&showMoveTo=true&saveParent=true#-%ED%8C%80-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)
- [사용 기술](notion://www.notion.so/fa94d6048d2047588e23d9ac118ba55a?p=2de19840ab974b45b297096b95590ef3&showMoveTo=true&saveParent=true#-%EC%82%AC%EC%9A%A9-%EA%B8%B0%EC%88%A0)
- [폴더 구조](notion://www.notion.so/fa94d6048d2047588e23d9ac118ba55a?p=2de19840ab974b45b297096b95590ef3&showMoveTo=true&saveParent=true#%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)
- [팀원](notion://www.notion.so/fa94d6048d2047588e23d9ac118ba55a?p=2de19840ab974b45b297096b95590ef3&showMoveTo=true&saveParent=true#-%ED%8C%80%EC%9B%90)

</br>

## ⌨️ 실행 방법

```jsx
$ git clone https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3.git
$ npm install
$ npm start
```

</br>

## ☑️ Best Practice 및 채택 근거

### 1. 컴포넌트의 재사용성 높이기

> src/component/common/

- 재사용이 가능한 공통 컴포넌트들을 분리하여 목적에 맞게 확장하여 사용할 수 있도록 하여 재사용성을 높였습니다.

### 2. 개발 효율성과 생산성 향상

- barrel방식으로 폴더 구조를 구성하여 파일이름의 가독성 높이기
- baseUrl을 지정하여 import시 경로의 가독성 높이기

### 3. 관련 state을 한 곳에 모아 응집도 높이기

- 서버에서 요청받은 데이터, 로딩, 에러의 정보를 `CarContext` 한 곳에 관리하도록 하여 상태흐름 파악이 용이하도록 했습니다.

```jsx
import { createContext, useReducer, useEffect, useCallback, useContext } from "react";
import { getCars } from "apis";
import { carReducer } from "helpers/useCarReducer";
import { CAR_ACTION_TYPES } from "constants/actionType";

const state = {
  carList: [],
  loading: false,
  error: null,
  selectedCar: null,
};

export const CarContext = createContext("");

export default const CarContextWrapper  = ({ children }) => {
  const [carState, dispatch] = useReducer(carReducer, state);

  const getCarsHandler = useCallback((params = {}) => {
    dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_LOADING });
    getCars(params)
      .then((res) => {
        dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_SUCCESS, cars: res });
      })
      .catch((error) => {
        dispatch({ type: CAR_ACTION_TYPES.GET_CAR_LIST_ERROR });
        throw new Error(error);
      });
  }, []);

  const findCarsHandler = (id) => {
    dispatch({ type: CAR_ACTION_TYPES.FIND_CAR_DETAIL, id });
  };

  useEffect(getCarsHandler, []);

  return (
    <CarContext.Provider value={{ carState, getCars: getCarsHandler, findCars: findCarsHandler }}>
      {children}
    </CarContext.Provider>
  );
}

export const useCarState = () => {
  const state = useContext(CarContext);
  if (!state) {
    throw new Error("Error finding CarContext Provider");
  }
  return state;
};

```

### 4. 반응형, 모바일 웹

- react-responsive라이브러리를 사용하여 모바일(450px ~ 360px)에 최적화된 UI를 구현했습니다.

```jsx
import { useMediaQuery } from "react-responsive";

const App = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 451 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 450 });
    return isMobile ? children : null;
  };
  /* ... */
};
```

### 5. 상세페이지에서 뒤로가기 버튼으로 이전페이지로 왔을 때에도 토글된 navItem이 유지되도록 하기

- 이전페이지로 돌아왔을 때에 토글된 navItem이 유지되는 것이 더 좋은 사용자 경험을 제공한다고 판단했습니다.
- `navContext`를 이용하여 토글된 navItem의 정보를 관리하여, 토글된 navItem이 유지되도록 구현했습니다.

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

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white"/> <img alt="React" src ="https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white"/> <img alt="React Router Dom" src ="https://img.shields.io/badge/React_Router_DOM-CA4245?&style=flat&logo=ReactRouter&logoColor=white"/>

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
│   │   ├── 📄 NoData // 보여줄 데이터가 없을 때 텍스트를 보여주는 컴포넌트
│   ├── 📂 CarDetail // 차량 상세 페이지에 사용되는 컴포넌트
│   ├── 📂 CarInfoBox // 차량 리스트에 사용되는 하나의 차량 정보에 대한 컴포넌트
│   ├── 📂 CarList // 차량 리스트 컴포넌트
│   ├── 📂 Header // 페이지 제목을 나타내는 컴포넌트
│   └── 📂 Nav // 차량 카테고리 컴포넌트
├── 📂 constants // 상수 관리
│   └── 📄 actionType
├── 📂 context // context API 관리
│   ├── 📄 CarContext // 차량 정보 관련 Context
│   └── 📄 NavContext // 차량 카테고리 관련 Context
├── 📂 pages // 페이지 관리
│   ├── 📄 Home
│   ├── 📄 Detail
│   └── 📄 Error
├── 📂 styles // global style 적용
│   ├── 📄 GlobalStyle
│   └── 📄 Theme
├── 📂 store // context API 관리
│   └── 📄 IssuesContext
├── 📂 utils // 공통적으로 사용되는 util 함수 관리
│   ├── 📄 carInfoConverter // api를 통해 제공받는 차량정보 한글로 변경
│   ├── 📄 formatAttribute // api를 통해 제공받는 차량정보 한글로 변경
│   └── 📄 isNew // 신규 차량인지 확인하는 함수
├── 📄 App
└── 📄 index

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
