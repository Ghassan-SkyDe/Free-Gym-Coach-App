import { Box, Pagination, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { ExercisesContext } from "../context/ExercisesContext"
import { exerciseOptions, fetchData } from "../utils/fetchData"
import ExerciseCard from "./ExerciseCard"

const Exercises = () => {
  const { exercises, loading } = useContext(ExercisesContext);

  return (
    <Box id="exercises" sx={{mt: { lg: "110px"}}} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px"}}} flexWrap="wrap" justifyContent="center">
        {/* temperary loading / change with circular loading  */}
        {loading && <h2>Loading....</h2>}
        {exercises.length && exercises.map((exercise, index) => <ExerciseCard key={`${exercise.id} ${index}`} exercise={exercise}/>)}
      </Stack>
    </Box>
  )
}

export default Exercises