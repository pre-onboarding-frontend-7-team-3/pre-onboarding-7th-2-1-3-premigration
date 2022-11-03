import { Link } from "react-router-dom";
import Icon from "../Icon";
import { BackButtonWrapper } from "./BackButton.style";

const BackButton = () => {
  return (
    <Link to="/">
      <BackButtonWrapper>
        <Icon icon="BackButton" />
      </BackButtonWrapper>
    </Link>
  );
};

export default BackButton;
