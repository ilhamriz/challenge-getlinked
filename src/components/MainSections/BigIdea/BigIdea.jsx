import { Box, Container } from "@mui/material";
import css from "./BigIdea.module.scss";
import { big_idea, unique_arrow } from "../../../assets/images";
import { StarIcon } from "../../../assets/icons";
import { Element } from "react-scroll";

function BigIdea() {
  return (
    <section>
      <h1 className="hidden">The Big Idea</h1>
      <Box className="line" />
      <Container maxWidth="lg">
        <Element name="Overview" className={css.inner}>
          <Box className={css.image}>
            <img src={big_idea} alt="Big Idea" />
            <Box className={css.star_1}>
              <StarIcon />
            </Box>
            <Box className={css.arrow}>
              <img src={unique_arrow} alt="Arrow" />
            </Box>
          </Box>
          <Box className={css.content}>
            <Box className={css.title}>
              Introduction to getlinked <span>tech Hackathon 1.0</span>
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
          </Box>
        </Element>
      </Container>
    </section>
  );
}

export default BigIdea;
