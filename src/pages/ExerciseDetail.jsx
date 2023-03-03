import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const { id } = useParams();
  return (
    <div>ExerciseDetail: {id}</div>
  )
}

export default ExerciseDetail