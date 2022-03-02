import "./Button.scss";
interface IProps {
  children: string;
  background?: string;
  position?: string;
}

const Button = (props: IProps) => {
  return (
    <button
      className={`button ${
        props.background ? props.background : "transparent"
      } ${props.position}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
