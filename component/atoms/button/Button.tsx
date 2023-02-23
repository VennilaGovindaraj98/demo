import styles from "./button.module.css";
import className from "classnames";
import React from "react";

interface buttonParams {
  className?: string;
  buttonText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  bg?: string;
  children?: React.ReactNode;
  key?: string | number;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement> | any;
  dataItemId?: number;
}

function Button(props: buttonParams) {
  const butClassName = className(styles.button, props.className);
  const { dataItemId } = props;
  return (
    <button
      key={props.key}
      className={butClassName}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      {props.buttonText} {props.children}
    </button>
  );
}

export default Button;
