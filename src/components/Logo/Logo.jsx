import css from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={css.logo}>
      get<span className={css.logo_colors}>linked</span>
    </div>
  );
};
