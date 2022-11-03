import { IconWrapper } from "./Icon.style";
import * as icons from "../svgs/index";

function Icon({ icon, size }) {
  const IconComponent = icons[icon];
  return (
    <IconWrapper width={size || 24} height={size || 24}>
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        width="100%"
        heigth="100%"
      />
    </IconWrapper>
  );
}

export default Icon;
