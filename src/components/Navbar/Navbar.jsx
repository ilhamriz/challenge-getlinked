import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import css from "./Navbar.module.scss";
import { Link } from "react-scroll";
import { Buttons } from "../Form";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { BarIcon, closeIcon } from "../../assets/icons";

function Navbar() {
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const changeBackground = () => {
    const { scrollY } = window;
    setIsScroll(scrollY > 0);
  };

  const handleResize = () => {
    const { innerWidth } = window;
    setIsTablet(innerWidth < 769);
    setIsMenu(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenu ? "hidden" : "auto";
  }, [isMenu]);

  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const LinkScroll = ({ target }) => {
    return (
      <Link
        activeClass={css.active}
        spy={true}
        className={css.nav__menu__item}
        to={target}
        smooth={true}
        offset={isTablet ? 0 : -80}
        duration={isTablet ? 300 : 1000}
        isDynamic={true}
        onClick={() => setIsMenu(false)}
      >
        {target}
      </Link>
    );
  };

  return (
    <nav className={`${css.nav} ${isScroll ? css["nav--scrolled"] : ""}`}>
      <h2 className="hidden">navbar</h2>
      <Container maxWidth="lg">
        <Box className={css.nav__container}>
          <NavLink to={"/"} className={css.logo}>
            <Logo />
          </NavLink>
          <Box className={css.nav__bar} onClick={() => setIsMenu(!isMenu)}>
            <BarIcon />
          </Box>
          <Box className={`${css.nav__menu} ${isMenu ? css.show : ""}`}>
            <Box className={css.nav__close} onClick={() => setIsMenu(false)}>
              <img src={closeIcon} alt="Close" />
            </Box>
            <Box className={css.nav__menu__content}>
              <Box className={css.nav__menu__list}>
                <LinkScroll target="Timeline" />
                <LinkScroll target="Overview" />
                <LinkScroll target="FAQs" />
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive
                      ? `${css.nav__menu__item} ${css.active}`
                      : css.nav__menu__item
                  }
                  onClick={() => setIsMenu(false)}
                >
                  Contact
                </NavLink>
              </Box>

              <Buttons
                onClick={() => {
                  setIsMenu(false);
                  navigate("/register");
                }}
              >
                Register
              </Buttons>
            </Box>
          </Box>
        </Box>
      </Container>
    </nav>
  );
}

export default Navbar;
