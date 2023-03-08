import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import { autoScroll } from "../utils/autoScroll";
import { dataSlicer } from "../utils/dataSlicer";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {

  const { resultTitle, resultExercises, allExercisesLoading, allExercises, allExercisesError } = useContext(ExerciseContext);

  const data = resultExercises.length < 1 ? allExercises : resultExercises;
  
  // pagination---data/handle
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const currentExercises = dataSlicer(exercisesPerPage, currentPage, data);

  const handlePagination = (e,value) => {
    setCurrentPage(value);
    // scrolls to top: xs:1300 md:1900
    autoScroll("toResults");
  }

  return (
    <Box id="exercises" sx={{mt: { lg: "110px"}}} mt="50px" p="20px">
      {/* the subject of result must add front of showing results(bodyPart/all/or searched item----fixIt) */}
      <Typography variant="h3" mb="46px" sx={{textAlign:{xs:"center",sm: "center", lg: "start"}}}>{`Showing Results ( ${resultTitle} )`}</Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px"}}} flexWrap="wrap" justifyContent="center">
        {/* temperary loading / change with circular loading or skeleton--fixIT  */}
        {allExercisesLoading && <h2>Loading....</h2>}
        {allExercisesError && <h2>Something went wrong, check your connection and try again!</h2>}
        {currentExercises?.length && currentExercises.map((exercise, index) => <ExerciseCard key={`${exercise.id} ${index}`} exercise={exercise}/>)}
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
            onChange={handlePagination}/>
        )}
      </Stack>
    </Box>
  )
}

export default Exercises