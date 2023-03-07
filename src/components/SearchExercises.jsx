import { Box, Button, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useContext, useEffect, useState } from "react"
// import { BodyPartsContext } from "../context/BodyPartsContext";
import { ExerciseContext } from "../context/ExerciseContext";
// import { ExercisesContext } from "../context/ExercisesContext";
import { autoScroll } from "../utils/autoScroll";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const ALL_EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const BODY_PARTS_EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

const SearchExercises = () => {
  const [search,setSearch] = useState('');
  // const { dispatchBodyParts } = useContext(BodyPartsContext);
  // replace this---fixIt
  // const { dispatchExercises } = useContext(ExercisesContext);
  const { dispatch, allExercises, bodyPartsLoading, allExercisesLoading, bodyPartsError, allExercisesError } = useContext(ExerciseContext);

  useEffect(() => {

    // catch dosent work --fixIt
    
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
        console.log("its meeeeeeeeeeeeeee");
      }
    }

    // fetchBodyParts();
    // fetchExercises();
  }, [dispatch]);

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  }

  const handleSearch = async () => {
    // move to reducers--fixIt
    if(search) {
      const searchedExercises = allExercises.filter(
      (exercise) => exercise.name?.toLowerCase().includes(search)
      || exercise.target?.toLowerCase().includes(search)
      || exercise.equipment?.toLowerCase().includes(search)
      || exercise.bodyPart?.toLowerCase().includes(search)
      );
      dispatch({type:"SET_RESULT_TITLE", payload: search});
      setSearch("");
      // should fixed---------------------------------in CONTEXT-------------fixIt
      dispatch({type: "SET_RESULT_EXERCISES", payload: searchedExercises});
      // dispatchExercises({type:"SET_EXERCISES",payload: searchedExercises});
      autoScroll();
    }else return;
  }

  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: "30px"}}} mb="50px" textAlign="center">Awesome Exercises You <br/> Should Know</Typography>
      
      <Box sx={{ position: "relative", width: "100%", p: "20px"}} mb="75px">
        <HorizontalScrollbar/>
      </Box>

      <Box position="relative" mb="72px">
        <TextField sx={{ 
          input:{ fontWeight: "700px", border:"none", borderRadius:"4px"},
          width: { lg: "800px", xs: "350px"},
          backgroundColor: "#fff",
          vorderRaduis: "40px"
        }} 
        height="76px" value={search} onChange={handleChange} placeholder="Search Exercises" type="text" />
        <Button onClick={handleSearch} className="search-btn" sx={{ 
          bgcolor:"#FF2625", 
          color: "#fff", 
          textTransform: "none", 
          width: { lg: "175px", xs: "100px"},
          fontSize: { lg: "20px", xs: "14px"},
          height: "56px",
          position: "absolute",
          right: "0"
          }}>Search</Button>
      </Box>

    </Stack>
  )
}

export default SearchExercises