import { useParams } from "react-router-dom";
import { exercisesDataTest } from "../data";

const ExerciseDetail = () => {
  const { id } = useParams();
  console.log(exercisesDataTest)
  return (
    <div>ExerciseDetail: {id}</div>
  )
}

export default ExerciseDetail