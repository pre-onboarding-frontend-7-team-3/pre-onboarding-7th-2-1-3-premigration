import Icon from "../Icon/Icon";
import { Button } from "./styles";

const BackIconButton = ({ ...props }) => {
  // TODO: 클릭 시 뒤로 가도록 구현해야함
  const handleClick = () => {};
  return (
    <Button {...props} onClick={handleClick}>
      <Icon name="BackIcon" />
    </Button>
  );
};

export default BackIconButton;
