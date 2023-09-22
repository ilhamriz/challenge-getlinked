import css from "./Buttons.module.scss";
import PropTypes from "prop-types";

function Buttons({ styles, type, children, ...props }) {
  const isDisabled = props?.disabled ? css["btn--disabled"] : "";

  return (
    <button
      type={type}
      className={`${css.btn} ${css[`btn--${styles}`]} ${isDisabled}`}
      {...props}
    >
      {children}
    </button>
  );
}

Buttons.propTypes = {
  styles: PropTypes.string,
  type: PropTypes.string,
};

Buttons.defaultProps = {
  styles: "primary", // primary, secondary, secondary-outline, outline
  type: "button",
};

export default Buttons;
