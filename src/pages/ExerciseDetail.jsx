import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details, ExerciseVideos, SimilarExercises } from "../components";
import { ExerciseContext } from "../context/ExerciseContext";
import { fetchData, youtubeOptions } from "../utils/fetchData";
// import { exerciseOptions, fetchData } from "../utils/fetchData";

// const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises/exercise";
const youTubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();
  const { allExercises } = useContext(ExerciseContext);
  
  useEffect(() => {

    // fetch online just one exercise-------------approach(1)
    // const fetchExercisesData = async () => {
    //   const exerciseDetailData = await fetchData(`${exerciseDbUrl}/${id}`, exerciseOptions);
    //   setExerciseDetail(exerciseDetailData);
    // }
    // fetchExercisesData();
    
    // find exercise from existing data of allExercises--------------approach(2)
    const selectedExercise = allExercises.find((item) => item.id === id);
    setExerciseDetail(selectedExercise);

    const fetchExerciseVideosData = async () => {
      const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${selectedExercise.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
    }

    fetchExerciseVideosData();

  },[id,allExercises])

  return (
    <Box>
      <Details data={ exerciseDetail }/>
      <ExerciseVideos data={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail