import { Box, Container } from "@mui/material";
import css from "./FAQ.module.scss";
import Accordion from "./Accordion";
import { faq } from "../../../assets/images";
import { Element } from "react-scroll";
import { StarIcon } from "../../../assets/icons";

const accordionData = [
  {
    id: 1,
    title: "Can I work on a project I started before the hackathon?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus.`,
  },
  {
    id: 2,
    title: "What happens if I need help during the hackathon?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam ad maxime deleniti ipsum, illum sequi asperiores amet.`,
  },
  {
    id: 3,
    title: "What happens if I don't have an idea for a project?",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint.`,
  },
  {
    id: 4,
    title: "Can I join a team or do I have to come with one?",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sequi nihil veritatis ducimus dolores ipsam! Deleniti laudantium!`,
  },
  {
    id: 5,
    title: "What happens after the hackathon ends",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sequi nihil veritatis ducimus dolores ipsam! Deleniti laudantium!`,
  },
  {
    id: 6,
    title: "Can I work on a project I started before the hackathon?",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sequi nihil veritatis ducimus dolores ipsam! Deleniti laudantium!`,
  },
];

function Component() {
  return (
    <section>
      <h1 className="hidden">FAQs</h1>
      <Box className="line" />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Element name="FAQs" className={css.inner}>
          <Box className={css.content}>
            <Box className={css.title}>
              Frequently Ask
              <br />
              <span>Question</span>
            </Box>
            <Box className={css.body}>
              We got answers to the questions that you might want to ask about{" "}
              <b>getlinked Hackathon 1.0</b>
            </Box>
            <Box className={css.accordion}>
              {accordionData.map(({ id, title, content }) => (
                <Accordion key={id} title={title} content={content} />
              ))}
            </Box>

            <Box className={css.star_1}>
              <StarIcon />
            </Box>
          </Box>
          <Box className={css.image}>
            <img src={faq} alt="FAQ" />
          </Box>
        </Element>
      </Container>
    </section>
  );
}

export default Component;
