import './card.component.css';
import { BtnComponent } from "../btn/btn.component";

type cardProps = {
    hexColor: string,
    imgSrc: string,
    title: string,
    content: string,
    btnContent: string
}
export const CardComponent = ({ hexColor, imgSrc, title, content, btnContent }: cardProps) => {
  const divStyle = {
    backgroundColor: hexColor,
  };

  return (
      <div style={divStyle} className="card">
        <img src={imgSrc} alt="card-image" />
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <BtnComponent hexColor={hexColor} btnContent={btnContent} />
      </div>
  );
}
