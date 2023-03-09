import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details, ExerciseVideos, SimilarExercises } from "../components";
import Loader from "../components/Loader";
import { ExerciseContext } from "../context/ExerciseContext";
import { autoScroll } from "../utils/autoScroll";
import { fetchData, youtubeOptions } from "../utils/fetchData";
// import { exerciseOptions } from "../utils/fetchData";

// const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises/exercise";
const youTubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [sameTargetExercises, setSameTargetExercises] = useState([]);
  const [sameBodyPartExercises, setSameBodyPartExercises] = useState([]);
  const { id } = useParams();
  const { allExercises } = useContext(ExerciseContext);
  
  
  useEffect(() => {
    // use first approach---fixIt
    // fetch online just one exercise/sameTargets/sameBodyParts-------------approach(1)
    // const fetchExercisesData = async () => {
    //   const exerciseDetailData = await fetchData(`${exerciseDbUrl}/${id}`, exerciseOptions);
    //   setExerciseDetail(exerciseDetailData);
      
    //   const sameTargetExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
    //   setSameTargetExercises(sameTargetExercisesData);

    //   const sameBodyPartExercisesData = await fetchData(`${exerciseDbUrl}/exercises/bodyPart/${exerciseDetailData.bodyPart}`, exerciseOptions);
    //   setSameBodyPartExercises(sameBodyPartExercisesData);
    // }
    // fetchExercisesData();
    
    // find exercise from existing data of allExercises/extraxts other data from allExercises------approach(2)
    const selectedExercise = allExercises.find((item) => item.id === id);
    setExerciseDetail(selectedExercise);

    const sameTargetExercisesData = allExercises.filter((exercise) => exercise.target === selectedExercise.target);
    setSameTargetExercises(sameTargetExercisesData);

    const sameBodyPartExercisesData = allExercises.filter((exercise) => exercise.bodyPart === selectedExercise.bodyPart);
    setSameBodyPartExercises(sameBodyPartExercisesData);

    // fetch Related Videos--------------------- 
    const fetchExerciseVideosData = async () => {
      const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${selectedExercise.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
    }

    fetchExerciseVideosData();

  },[id,allExercises])
  autoScroll("toTop");
  return (
    <Box>
      <Details data={ exerciseDetail }/>
      {exerciseVideos.length ? <ExerciseVideos data={exerciseVideos} name={exerciseDetail.name}/> : <Loader/>}
      {sameBodyPartExercises.length ? <SimilarExercises data={sameBodyPartExercises} bodyPart={exerciseDetail.bodyPart}/> : <Loader/>}
      {sameTargetExercises.length ? <SimilarExercises data={sameTargetExercises} target={exerciseDetail.target}/> : <Loader/>}
    </Box>
  )
}

export default ExerciseDetail