## 1. button component 

1. 피그마에서의 컴포넌트는 디자이너와 개발자가 “이것만” 사용하겠다고 약속한 내용입니다. 
    1. 현재 버튼 컴포넌트는 너무 많은 재량을 가지고 있습니다.
    2. 만약 px 단위나 색상 코드를 그대로 가져다가 사용하려면 상수로 값들을 사용하는 것이 좋아보입니다 
    ex) xs, sm, md, lg, xl 
    3. 상수로 사용하면 다른 장소 같은 버튼들의 값을 한번에 바꿀 수 있습니다. 현재 상태면 이 버튼을 크게 사용하는건지 작게 사용하는건지 비활성화인지 활성화인지 구분이 어렵습니다.
    4. 하지만 상수의 존재 여부는 기억하기가 어렵습니다. 그렇기 때문에 개발자를 믿지 않는다는 관점에선 버튼의 프랍스로 사용할 수 있는 값을 제한 하는것이 좋을것 같습니다. 
    5. 웹 접근성에 관해 버튼컴포넌트를 div로 만들면 접근성 헬퍼 도구들이 인식하지 못하는 문제가 있어서 div ⇒ button으로의 태그 수정?이 필요할것 같습니다.
    6. 버튼 컴포넌트 안에 {children}이 단순히 텍스트용도라면 프랍스에 텍스트 값을 넣어주고 사용하는 방법도 가독성을 생각해보면 좋아보입니다. ← props로 내려주는 값에 텍스트 사용을 없애자는 관점으로는… 의논 필요…
    

![스크린샷 2022-11-03 오후 2 04 24](https://user-images.githubusercontent.com/86206374/199651045-f4b9bbaf-9e35-4ec7-8219-73d0481c5d3d.png)


```jsx

const Button = ({
  type = "button",
  variant = "normal",
  width = "62px",
  height = "27px",
  margin = 0,
  padding = 0,
  fontSize = "14px",
  fontWeight = "700",
  borderRadius = "0px",
  borderColor = (props) => props.theme.BLACK,
  color = (props) => props.theme.BLACK,
  backgroundColor = (props) => props.theme.GRAY,
  disabled = false,
  children,
  onClick,
  ...props
}) => {
```

밑의 내용은 리팩토링해서 브랜치에 올려뒀는데 확인하고 사용해보셔도 될 것 같아요 

https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3/tree/develpe/leejiwon

## 2. CarContextWrapper 

```jsx
import { createContext, useState, useReducer, useEffect, useCallback, useMemo } from "react";
import { getCars } from "apis";

import { carReducer } from "helpers/useCarReducer";

const state = {
  carList: [],
  selectedCar: null,
};

export const CarContext = createContext("");

export default function CarContextWrapper({ children }) {
  const [carState, dispatch] = useReducer(carReducer, state);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getCarsHandler = useCallback((params = {}) => {
    setIsLoading(true);
    getCars(params)
      .then((res) => {
        dispatch({ type: "GET", cars: res });
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }, []);

  const findCarsHandler = useCallback((id) => {
    dispatch({ type: "FIND", id });
  }, []);

  const contextValue = useMemo(() => {
    return {
      carState,
      isLoading,
      errorMessage,
      getCars: getCarsHandler,
      findCars: findCarsHandler,
    };
  }, [carState, isLoading, errorMessage]);

  useEffect(getCarsHandler, []);

  return <CarContext.Provider value={contextValue}>{children}</CarContext.Provider>;
}
```

## 3. useMediaQuery

```jsx
import LayOut from "components/LayOut";
import CarContextWrapper from "context/CarContext";
import NavContextWrapper from "context/NavContext";
import { useMediaQuery } from "react-responsive";
import { Home, Detail } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 450, minWidth: 350 });

  if (!isMobile) {
    return <h1>화면을 줄여 이용해주세요</h1>;
  }

  return (
    <CarContextWrapper>
      <NavContextWrapper>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </NavContextWrapper>
    </CarContextWrapper>
  );
}

export default App;
```

그리고 뒤에 브랜치 이름 한글로 하니까 밑에서는 이름이 안보여서 영어로 하시는건 어떨까요?

![스크린샷 2022-11-03 오후 2 00 46](https://user-images.githubusercontent.com/86206374/199650717-23d14c04-a6d3-4538-8f0f-c64407c3a420.png)




