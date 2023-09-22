import { Box } from "@mui/material";
import css from "./CountdownRender.module.scss";
import PropTypes from "prop-types";

export const CountdownRender = ({ times }) => {
  return (
    <Box className={css.wrapper}>
      <Box className={css.container}>
        <Box className={`${css.time}`}>{times?.hours}</Box>
        <Box className={`${css.name}`}>H</Box>
      </Box>

      <Box className={css.container}>
        <Box className={`${css.time}`}>{times?.minutes}</Box>
        <Box className={`${css.name}`}>M</Box>
      </Box>

      <Box className={css.container}>
        <Box className={`${css.time}`}>{times.seconds}</Box>
        <Box className={`${css.name}`}>S</Box>
      </Box>
    </Box>
  );
};

CountdownRender.propTypes = {
  times: PropTypes.object,
};
