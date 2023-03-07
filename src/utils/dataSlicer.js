  

export const dataSlicer = (exercisesPerPage,currentPage,data) => {
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  
  return data?.slice(indexOfFirstExercise,indexOfLastExercise);
}