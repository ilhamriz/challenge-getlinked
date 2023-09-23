import { Box, Container } from "@mui/material";
import css from "./Judging.module.scss";
import { judging } from "../../../assets/images";
import { StarIcon } from "../../../assets/icons";
import { Buttons } from "../../Form";

function Judging() {
  return (
    <section>
      <h1 className="hidden">Judging Criteria</h1>
      <Box className="line" />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box className={css.inner}>
          <Box className={css.image}>
            <img src={judging} alt="Man and woman judging" />
            <Box className={css.star_1}>
              <StarIcon />
            </Box>
            <Box className={css.star_2}>
              <StarIcon />
            </Box>
            <Box className={css.gradient_circle_1}>
              <Box className="gradient-circle" />
            </Box>
          </Box>
          <Box className={css.content}>
            <Box className={css.title}>
              Judging Criteria
              <br />
              <span>Key attributes</span>
            </Box>
            <Box className={css.body}>
              <Box>
                <span>Innovation and Creativity</span>: Evaluate the uniqueness
                and creativity of the solution. Consider whether it addresses a
                real-world problem in a novel way or introduces innovative
                features.
              </Box>
              <Box>
                <span>Functionality</span>: Assess how well the solution works.
                Does it perform its intended functions effectively and without
                major issues? Judges would consider the completeness and
                robustness of the solution.
              </Box>
              <Box>
                <span>Impact and Relevance</span>: Determine the potential
                impact of the solution in the real world. Does it address a
                significant problem, and is it relevant to the target audience?
                Judges would assess the potential social, economic, or
                environmental benefits.
              </Box>
              <Box>
                <span>Technical Complexity</span>: Evaluate the technical
                sophistication of the solution. Judges would consider the
                complexity of the code, the use of advanced technologies or
                algorithms, and the scalability of the solution.
              </Box>
              <Box>
                <span>Adherence to Hackathon Rules</span>: Judges will Ensure
                that the team adhered to the rules and guidelines of the
                hackathon, including deadlines, use of specific technologies or
                APIs, and any other competition-specific requirements.
              </Box>
            </Box>
            <Box>
              <Buttons>Read More</Buttons>
            </Box>
            <Box className={css.star_3}>
              <StarIcon />
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

export default Judging;
