import { Box, Container } from "@mui/material";
import css from "./Hero.module.scss";
import {
  chain,
  creative,
  explode,
  blue_metrix,
  metrix,
  man,
} from "../../../assets/images";
import { Buttons } from "../../Form";
import { useNavigate } from "react-router-dom";
import Countdown, { zeroPad } from "react-countdown";
import { CountdownRender } from "./CountdownRender";
import { QuoteLine, StarIcon } from "../../../assets/icons";

function Hero() {
  const navigate = useNavigate();
  const targetDate = new Date("2023-09-26");
  targetDate.setHours(0, 0, 0, 0);

  return (
    <div className={css.wrapper}>
      <Box className="line" />

      <Container maxWidth={"lg"} className={css.custom_container}>
        <Box className={css.inner}>
          <Box className={css.quote}>
            Igniting a Revolution in <span>HR Innovation</span>
            <QuoteLine />
          </Box>
          <Box className={css.container}>
            <Box className={css.content}>
              <Box className={css.title}>
                <Box className={css.title__top}>
                  getlinked Tech{" "}
                  <img src={creative} alt="Creative" className={css.creative} />
                  <Box className={css.star_2}>
                    <StarIcon />
                  </Box>
                </Box>
                <Box className={css.title__bottom}>
                  <span>
                    Hackathon{" "}
                    <span className={css.title__bottom_colors}>1.0</span>
                  </span>
                  <img src={chain} alt="Chain" className={css.chain} />
                  <img src={explode} alt="Explode" className={css.explode} />
                </Box>
              </Box>
              <Box className={css.body}>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </Box>
              <Box className={css.buttons}>
                <Buttons onClick={() => navigate("/register")}>
                  Register
                </Buttons>
                <Box className={css.star_3}>
                  <StarIcon />
                </Box>
              </Box>
              <Box>
                <Countdown date={targetDate} renderer={renderer} />
              </Box>
            </Box>
            <Box>
              <Box className={css.image_container}>
                <Box className={css.circle_2}>
                  <Box className="purple-circle" />
                </Box>
                <img src={metrix} alt="" className={`${css.background_1}`} />
                <img src={man} alt="" className={`${css.background_2}`} />
                <img
                  src={blue_metrix}
                  alt=""
                  className={`${css.background_3}`}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={css.circle_1}>
          <Box className="purple-circle" />
        </Box>
        <Box className={css.star_1}>
          <StarIcon />
        </Box>
      </Container>
    </div>
  );
}

const renderer = ({ hours, minutes, seconds }) => {
  const times = {
    hours: zeroPad(hours),
    minutes: zeroPad(minutes),
    seconds: zeroPad(seconds),
  };

  return <CountdownRender times={times} />;
};

export default Hero;
