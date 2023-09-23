import { useState } from "react";
import css from "./Accordion.module.scss";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={css.wrapper}>
      <div
        className={`${css.title} ${isActive ? css.active : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div className={css.icons}>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className={css.content}>{content}</div>}
    </div>
  );
}

export default Accordion;
