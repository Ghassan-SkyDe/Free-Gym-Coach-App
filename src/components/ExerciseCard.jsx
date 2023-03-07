import { Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
            <Button className="exercise-btn" sx={{background: "#ffa9a9"}} title="bodyPart">{exercise.bodyPart}</Button>
            <Button className="exercise-btn" sx={{ background: "#fcc757"}} title="target">{exercise.target}</Button>
        </Stack>
        <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard