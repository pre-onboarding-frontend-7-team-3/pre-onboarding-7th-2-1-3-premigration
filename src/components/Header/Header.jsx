import BackButton from "components/common/BackButton";
import { HeaderStyle } from "./Header.style";

const Header = ({ title, redirect }) => {
  return (
    <HeaderStyle>
      {redirect && <BackButton />}
      <span>{title}</span>
    </HeaderStyle>
  );
};

export default Header;
