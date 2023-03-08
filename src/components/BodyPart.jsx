import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import icon from "../assets/icons/gymClass.svg";
import { ExerciseContext } from "../context/ExerciseContext";
import { autoScroll } from "../utils/autoScroll";

const BodyPart = ({ item }) => {
  const { selectedBodyPart, dispatch, allExercises } = useContext(ExerciseContext);
  const handleSelectedBodyPart = () => {
    const selectedExercises = item === "all" ? allExercises : allExercises.filter((exercise) => exercise.bodyPart?.toLowerCase().includes(item));
    dispatch({type:"SET_SELECTED_BODY_PART",payload: item});
    dispatch({type:"SET_RESULT_TITLE",payload: item});
    dispatch({type:"SET_RESULT_EXERCISES",payload: selectedExercises});
    // scrolls to top: xs:1300 md:1900
    autoScroll("toResults");
    
  }
  return (
    <Stack onClick={handleSelectedBodyPart} type="button" alignItems="center" justifyContent="center"
     className={`bodyPart-card ${selectedBodyPart === item ? "selected" : ""}`} >
      <img src={icon} alt="gym class icon" width="50px" height="auto"/>
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart