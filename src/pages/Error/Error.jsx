import { useLocation, useNavigate } from "react-router-dom";
import * as Style from "./Error.style";

const Error = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <section>
        <Style.Errheader>
          {state ? (
            <>
              <p>다음과 같은 이유로 오류가 났습니다😅</p>
              <div>{state}</div>
            </>
          ) : (
            "해당 페이지를 찾을 수 없습니다.😅"
          )}
        </Style.Errheader>{" "}
        <Style.HomeBtn size="lg" ripple={true} onClick={() => navigate("/")}>
          홈으로
        </Style.HomeBtn>
      </section>
    </>
  );
};

export default Error;
