import { Box } from "@mui/material";
import { Exercises, HeroBanner, SearchExercises } from "../components";

// import { useState } from "react";

const Home = () => {
  
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home