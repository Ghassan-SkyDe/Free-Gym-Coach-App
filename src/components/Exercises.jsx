import { Box, Pagination, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { ExercisesContext } from "../context/ExercisesContext"
import { autoScroll } from "../utils/autoScroll"
import { exerciseOptions, fetchData } from "../utils/fetchData"
import ExerciseCard from "./ExerciseCard"

const Exercises = () => {
  const { exercises, loading } = useContext(ExercisesContext);

  // calc---pagination---data/handle
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  const handlePagination = (e,value) => {
    setCurrentPage(value);
    // scrolls to top: xs:1300 md:1900
    autoScroll();
  }

  return (
    <Box id="exercises" sx={{mt: { lg: "110px"}}} mt="50px" p="20px">
      {/* the subject of result must add front of showing results(bodyPart/all/or searched item----fixIt) */}
      <Typography variant="h3" mb="46px" sx={{textAlign:{xs:"center",sm: "center", lg: "start"}}}>Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px"}}} flexWrap="wrap" justifyContent="center">
        {/* temperary loading / change with circular loading--fixIT  */}
        {loading && <h2>Loading....</h2>}
        {currentExercises.length && currentExercises.map((exercise, index) => <ExerciseCard key={`${exercise.id} ${index}`} exercise={exercise}/>)}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 10 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            size="large"
            page={currentPage}
            onChange={handlePagination}/>
        )}
      </Stack>
    </Box>
  )
}

export default Exercises