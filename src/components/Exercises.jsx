import { Alert, Box, Pagination, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import { autoScroll } from "../utils/autoScroll";
import { dataSlicer } from "../utils/dataSlicer";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = () => {
  const {
    resultTitle,
    resultExercises,
    allExercisesLoading,
    allExercises,
    allExercisesError,
  } = useContext(ExerciseContext);
  const data = resultExercises.length < 1 ? allExercises : resultExercises;

  // pagination---data/handle
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const currentExercises = dataSlicer(exercisesPerPage, currentPage, data);

  const handlePagination = (e, value) => {
    setCurrentPage(value);
    autoScroll("toResults");
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        mb="46px"
        sx={{
          fontSize: { xs: "1.6rem", md: "2rem" },
          textAlign: { xs: "center", sm: "center", lg: "start" },
          fontWeight: "bold",
        }}
      >{`Showing Results ( ${resultTitle} )`}</Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {allExercisesLoading && <Loader />}
        {allExercisesError && (
          <Alert severity="error">Check your connection and try again!</Alert>
        )}
        {currentExercises?.length &&
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={`${exercise.id} ${index}`} exercise={exercise} />
          ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {data?.length > 10 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(data?.length / exercisesPerPage)}
            size="large"
            page={currentPage}
            onChange={handlePagination}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
