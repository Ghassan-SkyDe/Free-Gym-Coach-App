import { Box, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ data, bodyPart, target }) => {
  return (
    <Box sx={{ mt: { lg: "150px", xs: "50px" } }}>
      {target && (
        <Typography mb="10px" variant="h5">
          Exercises that targets the{" "}
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            {target}
          </span>{" "}
          muscle
        </Typography>
      )}
      {bodyPart && (
        <Typography mb="10px" variant="h5">
          Exercises that targets the muscle group of{" "}
          <span
            style={{
              color: "#ff2625",
              textTransform: "capitalize",
              marginBottom: "3rem",
            }}
          >
            {bodyPart}
          </span>
        </Typography>
      )}
      <HorizontalScrollbar data={data} />
    </Box>
  );
};

export default SimilarExercises;
