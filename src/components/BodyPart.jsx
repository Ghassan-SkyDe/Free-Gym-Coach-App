import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import icon from "../assets/icons/gymClass.svg";
import { ExerciseContext } from "../context/ExerciseContext";
import { autoScroll } from "../utils/autoScroll";

const BodyPart = ({ bodyPart }) => {
  const { selectedBodyPart, dispatch, allExercises } = useContext(ExerciseContext);
  const handleSelectedBodyPart = () => {
    const selectedExercises = bodyPart === "all" ? allExercises : allExercises.filter((exercise) => exercise.bodyPart?.toLowerCase().includes(bodyPart));
    dispatch({type:"SET_SELECTED_BODY_PART",payload: bodyPart});
    dispatch({type:"SET_RESULT_TITLE",payload: bodyPart});
    dispatch({type:"SET_RESULT_EXERCISES",payload: selectedExercises});
    autoScroll("toResults");
    
  }
  return (
    <Stack onClick={handleSelectedBodyPart} type="button" alignItems="center" justifyContent="center"
     className={`bodyPart-card ${selectedBodyPart === bodyPart ? "selected" : ""}`} >
      <img src={icon} alt="gym class icon" width="50px" height="auto"/>
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{bodyPart}</Typography>
    </Stack>
  )
}

export default BodyPart