import BackButton from "components/common/BackButton";
import { HeaderStyle } from "./Header.style";

function Header({ title, redirect }) {
  return (
    <HeaderStyle>
      {redirect && <BackButton />}
      {title}
    </HeaderStyle>
  );
}

export default Header;
