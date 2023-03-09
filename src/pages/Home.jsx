import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { Exercises, HeroBanner, SearchExercises } from "../components";
import { ExerciseContext } from "../context/ExerciseContext";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ALL_EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const BODY_PARTS_EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

const Home = () => {

  const { dispatch } = useContext(ExerciseContext);

  useEffect(() => {

    const fetchBodyParts = async () => {
      dispatch({type:"GET_BODY_PARTS_START"});
      try {
        const bodyPartsData = await fetchData(BODY_PARTS_EXERCISES_URL, exerciseOptions);
        dispatch({type:"GET_BODY_PARTS_SUCCESS",payload:["all",...bodyPartsData]});
      } catch (err) {
        dispatch({type:"GET_BODY_PARTS_FAILURE",payload: err})
      }
    }

    const fetchExercises = async () => {
      dispatch({type:"GET_EXERCISES_START"});
      try {
        const exercisesData = await fetchData(ALL_EXERCISES_URL, exerciseOptions);
        dispatch({type:"GET_EXERCISES_SUCCESS",payload:exercisesData});
      } catch (err) {
        dispatch({type:"GET_EXERCISES_FAILURE",payload: err})
      }
    }

    fetchBodyParts();
    fetchExercises();
  }, [dispatch]);
  
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home;