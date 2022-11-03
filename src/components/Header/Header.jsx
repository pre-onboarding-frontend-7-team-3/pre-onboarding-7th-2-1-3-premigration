import BackButton from "components/common/BackButton";
import { HeaderStyle } from "./Header.style";

function Header({ title, header }) {
  return (
    <HeaderStyle>
      {!header && <BackButton />}
      <h3>{title}</h3>
    </HeaderStyle>
  );
}

export default Header;
