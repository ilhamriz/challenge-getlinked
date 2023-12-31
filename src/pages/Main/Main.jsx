import { Box } from "@mui/material";
import { BigIdea, FAQ, Guidelines, Hero, Judging } from "../../components/MainSections";
import css from "./Main.module.scss";
import Footer from "../../components/Footer/Footer";

function Main() {
  return (
    <Box className={css.wrapper}>
      <Hero />
      <BigIdea />
      <Guidelines />
      <Judging />
      <FAQ />
      <Footer />
    </Box>
  );
}

export default Main;
