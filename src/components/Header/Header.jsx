import BackButton from "components/common/BackButton";
import { HeaderStyle } from "./Header.style";

function Header({ title, header }) {
  return (
    <HeaderStyle>
      {!header && <BackButton />}
      {title}
    </HeaderStyle>
  );
}

export default Header;
