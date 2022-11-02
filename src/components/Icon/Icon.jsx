import * as icons from "../../assets/icons";

const Icon = ({ name, size = 24, strokeWidth = 2, rotate, color = "#222", ...props }) => {
  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    strokeWidth: strokeWidth,
    color: color,
  };

  const SVGIcon = icons[name];

  return <SVGIcon style={{ ...props, ...shapeStyle }} />;
};

export default Icon;
