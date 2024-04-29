"use client";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
  bgBtn?: "primary" | "secondary";
  textColor?: string;
  height?: number;
  className?: string;
  border?: boolean;
  borderColor?: string;
  icon?: React.ReactNode;
  hoverBg?: string;
  hoverColor?: string;
  iconRightPosition?: boolean;
}

const Button = (props: ButtonProps) => {
  let newStyles = "";
  switch (props.bgBtn) {
    case "primary":
      newStyles = "text-white bg-blue-500 hover:bg-blue-800";
      break;
    case "secondary":
      newStyles = "text-gray-500 hover:bg-gray-200";
      break;

    default:
      break;
  }
  const Main = () => {
    return (
      <button
        className={`flex items-center justify-center gap-1 rounded px-2 py-1 text-sm font-bold transition-all ${newStyles} ${
          props.hoverColor
        } ${props.hoverBg} ${props.textColor} ${props.border ? "border" : ""} ${
          props.borderColor
        } ${props.className}`}
        style={{ height: props.height, boxSizing: "border-box" }}
      >
        {!props.iconRightPosition ? props.icon : ""}
        {props.children}
        {props.iconRightPosition ? props.icon : ""}
      </button>
    );
  };
  if (props.href) {
    return (
      <Link href={props.href}>
        <Main />
      </Link>
    );
  } else return <Main />;
};

export default Button;
