import BackIconButton from "../BackIconButton/BackIconButton";
import { Header } from "./styles";

const HeaderBar = ({ text, backBtn }) => {
  return (
    <Header>
      {backBtn && <BackIconButton style={{ position: "absolute", left: "20px" }} />}
      <span>{text}</span>
    </Header>
  );
};

export default HeaderBar;
