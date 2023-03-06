import { Box, Button, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useContext, useEffect, useState } from "react"
import { BodyPartsContext } from "../context/BodyPartsContext";
import { ExercisesContext } from "../context/ExercisesContext";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const ALL_EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const BODY_PARTS_EXERCISES_URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

const SearchExercises = () => {
  const [search,setSearch] = useState('');
  const { dispatchBodyParts } = useContext(BodyPartsContext);
  const { dispatchExercises, exercises } = useContext(ExercisesContext);

  useEffect(() => {

    const fetchBodyParts = async () => {
      dispatchBodyParts({type:"GET_BODY_PARTS_START"});
      try {
        const bodyPartsData = await fetchData(BODY_PARTS_EXERCISES_URL, exerciseOptions);
        console.log(JSON.stringify(bodyPartsData));
        dispatchBodyParts({type:"GET_BODY_PARTS_SUCCESS",payload:["all",...bodyPartsData]});
      } catch (err) {
        dispatchBodyParts({type:"GET_BODY_PARTS_FAILURE",payload: err})
      }
    }

    const fetchExercises = async () => {
      dispatchExercises({type:"GET_EXERCISES_START"});
      try {
        const exercisesData = await fetchData(ALL_EXERCISES_URL, exerciseOptions);
        dispatchExercises({type:"GET_EXERCISES_SUCCESS",payload:exercisesData});
      } catch (err) {
        dispatchExercises({type:"GET_EXERCISES_FAILURE",payload: err})
      }
    }

    // fetchBodyParts();
    // fetchExercises();
  }, [dispatchBodyParts,dispatchExercises]);

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  }

  const handleSearch = async () => {
    if(search) {
      const searchedExercises = exercises.filter(
      (exercise) => exercise.name?.toLowerCase().includes(search)
      || exercise.target?.toLowerCase().includes(search)
      || exercise.equipment?.toLowerCase().includes(search)
      || exercise.bodypart?.toLowerCase().includes(search)
      );

      setSearch("");
      dispatchExercises({type:"SET_EXERCISES",payload: searchedExercises});
    }else return;
  }

  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: "30px"}}} mb="50px" textAlign="center">Awesome Exercises You <br/> Should Know</Typography>
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

      <Box sx={{ position: "relative", width: "100%", p: "20px"}}>
        <HorizontalScrollbar/>
      </Box>
    </Stack>
  )
}

export default SearchExercises