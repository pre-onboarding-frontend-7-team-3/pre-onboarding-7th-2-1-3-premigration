import { useLocation, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <section>
        <header>
          {state ? (
            <>
              <p>다음과 같은 이유로 오류가 났습니다😅</p>
              <div>{state}</div>
            </>
          ) : (
            "해당 페이지를 찾을 수 없습니다.😅"
          )}
        </header>{" "}
        <button size="lg" ripple={true} onClick={() => navigate("/")}>
          홈으로
        </button>
      </section>
    </>
  );
}

export default Error;
