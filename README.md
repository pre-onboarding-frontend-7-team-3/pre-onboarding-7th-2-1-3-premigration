# 원티드 프리온보딩 프론트엔드 3팀 - 2weeks - 1

> 목적 : B2C 차량대여 서비스를 제공하는 웹 사이트 구축
> 
> 
> 프로젝트 기간 : 2022년 11월 1일 ~ 2022년 11월 4일
> 
> ### [배포링크]
> 

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

1. 컴포넌트의 재사용성 높이기
    
    > src/component/common/
    > 
    - 재사용이 가능한 공통 컴포넌트들을 분리하여 목적에 맞게 확장하여 사용할 수 있도록 하여 재사용성을 높였습니다.
2. 개발 효율성과 생산성 향상
    - barrel방식으로 폴더 구조를 구성하여 파일이름의 가독성 높이기
    - baseUrl을 지정하여 import시 경로의 가독성 높이기
3. 관련 state을 한 곳에 모아 응집도 높이기 
    - 서버에서 요청받은 데이터, 로딩, 에러의 정보를 C`arContext` 한 곳에 관리하도록 하여 상태흐름 파악이 용이하도록 했습니다.
    
    ```jsx
    // CarContext.js
    import { createContext, useReducer, useEffect, useCallback, useContext } from "react";
    import { getCars } from "apis";
    import { CAR_ACTION_TYPES, carReducer } from "helpers/useCarReducer";
    
    const state = {
      carList: [],
      loading: false,
      error: null,
      selectedCar: null,
    };
    
    export const CarContext = createContext("");
    
    export default function CarContextWrapper({ children }) {
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
    
      useEffect(getCarsHandler, []);
    
      return (
        <CarContext.Provider value={{ carState, getCars: getCarsHandler }}>
          {children}
        </CarContext.Provider>
      );
    }
    ```
    
4. 반응형, 모바일 웹
    - react-responsive라이브러리를 사용하여 모바일(450px ~ 360px)에 최적화된 UI를 구현했습니다.
    
    ```jsx
    import { useMediaQuery } from "react-responsive";
    
    function App() {
      const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 451 });
        return isDesktop ? children : null;
      };
    
      const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 450 });
        return isMobile ? children : null;
      };
    	/* ... */
    }
    ```
    

</br>

## 🔒 팀 코드 컨벤션

- [ ]  git commit message 컨벤션

| 커밋명 | 내용 |
| --- | --- |
| feat | 파일, 폴더, 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 제품 코드 수정 없음 |
| style | 코드 형식, 정렬, 주석 등의 변경 |
| refactor | 코드 리팩토링 |
| test | 테스트 코드 추가 |
| chore | 환경설정, 빌드 업무, 패키지 매니저 설정등.. |
| hotfix | 치명적이거나 급한 버그 수정 |
- [ ]  branch 컨벤션

| 브랜치명 | 내용 |
| --- | --- |
| develop | 파일, 폴더, 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 제품 코드 수정 없음 |
| refactor | 코드 리팩토링 |
| hotfix | 치명적이거나 급한 버그 수정 |

</br>

## 🔨 사용 기술

</br>

## 📦 폴더 구조

## 👨‍👩‍👧‍👦 팀원

| 조은지<br/>(팀장) | 고영훈<br/>(서기) | 김창희<br/>(팀원) | 박정민<br/>(팀원) |
| --- | --- | --- | --- |
| <img src="https://avatars.githubusercontent.com/u/95282989?s=96&v=4" alt="Joeunji0119" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/65995664?s=96&v=4" alt="YeonghunKO" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/45018724?s=96&v=4" alt="PiperChang" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/55550034?s=96&v=4" alt="ono212" width="100" height="100"> |
| Joeunji0119 | YeonghunKO | PiperChang | ono212 |

| 문지원<br/>(팀원) | 이상민<br/>(팀원) | 이지원<br/>(팀원) | 조수진<br/>(팀원) |
| --- | --- | --- | --- |
| <img src="https://avatars.githubusercontent.com/u/78708082?s=96&v=4" alt="moonkorea00" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/28257740?s=96&v=4" alt="dltkdals224" with="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/86206374?s=96&v=4" alt="365supprot" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/110365677?v=4" alt="suzz-in" width="100" height="100"> |
| moonkorea00 | dltkdals224 | 365support | suzz-in |


