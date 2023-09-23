import { Box, Container } from "@mui/material";
import css from "./Guidelines.module.scss";
import { woman_sit } from "../../../assets/images";
import { StarIcon } from "../../../assets/icons";

function Guidelines() {
  return (
    <section>
      <h1 className="hidden">Rules and Guidelines</h1>
      <Box className="line" />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box className={css.inner}>
          <Box className={css.content}>
            <Box className={css.title}>
              Rules and
              <br />
              <span>Guidelines</span>
            </Box>
            <Box className={css.body}>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether
              you&apos;re a coding genius, a design maverick, or a concept
              wizard, you&apos;ll have the chance to transform your ideas into
              reality. Solving real-world problems, pushing the boundaries of
              technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!
            </Box>
            <Box className={css.star_2}>
              <StarIcon />
            </Box>
            <Box className={css.star_3}>
              <StarIcon />
            </Box>
          </Box>
          <Box className={css.image}>
            <img src={woman_sit} alt="Woman sit" />
            <Box className={css.star_1}>
              <StarIcon />
            </Box>
            <Box className={css.gradient_circle_1}>
              <Box className="gradient-circle" />
            </Box>
          </Box>
        </Box>

        <Box className={css.circle_1}>
          <Box className="purple-circle" />
        </Box>
        <Box className={css.circle_2}>
          <Box className="purple-circle" />
        </Box>
      </Container>
    </section>
  );
}

export default Guidelines;
