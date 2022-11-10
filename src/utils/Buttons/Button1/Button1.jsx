import React, { useState } from "react";
import { Link } from "react-router-dom";

import css from "./Button1.module.css";

const Button1 = ({
  txt = "Button1",
  img = "",
  bck = "white",
  color = "#1c1d1f",
  hovBck = "rgba(0, 0, 0, 0.04)",
  onClick = () => {},
  imageCss = {},
  extraCss = {},
  classNames = {},
  link = false,
}) => {
  let [style, setStyle] = useState({ backgroundColor: bck, color: color });

  let mouseOverHandler = () => {
    return setStyle({ backgroundColor: hovBck, color: color });
  };
  let mouseLeaveHandler = () => {
    return setStyle({ backgroundColor: bck, color: color });
  };
  let btn = (
    <div
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{ ...style, ...extraCss }}
      className={[css.btn, classNames]?.join(" ")}
      onClick={onClick}
    >
      <span className={css.txtBox}>
        {img ? <img src={img} className={css.btnImg} style={imageCss} /> : ""}
        {txt ? <span className={css.txt}>{txt}</span> : null}
      </span>
    </div>
  );

  if (link) {
    btn = (
      <Link
        to={link}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        style={{ ...style, ...extraCss }}
        className={css.btn}
        onClick={onClick}
      >
        <span className={css.txtBox}>
          {img ? <img src={img} className={css.btnImg} style={imageCss} /> : ""}
          {txt ? <span className={css.txt}>{txt}</span> : null}
        </span>
      </Link>
    );
  }

  return btn;
};

export default Button1;
