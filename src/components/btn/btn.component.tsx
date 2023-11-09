import './btn.component.css'
import { useState } from "react";

type btnProps = {
  hexColor: string,
  btnContent: string,
}
export const BtnComponent = ({ hexColor, btnContent }: btnProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const divStyle = {
    backgroundColor: isHovered ? hexColor : 'white',
    color: isHovered ? 'white' : hexColor
  }

  return (
    <div className="btn" style={divStyle} onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
      <div className="text">{btnContent}</div>
    </div>
  )
}
