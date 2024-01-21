import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useState } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import { autoScroll } from "../utils/autoScroll";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const {
    dispatch,
    allExercises,
    bodyParts,
    bodyPartsLoading,
    bodyPartsError,
  } = useContext(ExerciseContext);

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    // move to reducers--fixIt
    if (search) {
      const searchedExercises = allExercises.filter(
        (exercise) =>
          exercise.name?.toLowerCase().includes(search) ||
          exercise.target?.toLowerCase().includes(search) ||
          exercise.equipment?.toLowerCase().includes(search) ||
          exercise.bodyPart?.toLowerCase().includes(search)
      );
      dispatch({ type: "SET_RESULT_TITLE", payload: search });
      setSearch("");
      // should fixed---------------------------------in CONTEXT-------------fixIt
      dispatch({ type: "SET_RESULT_EXERCISES", payload: searchedExercises });
      autoScroll("toResults");
    } else return;
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }} mb="75px">
        {bodyPartsError && (
          <Alert severity="error">Check your connection and try again!</Alert>
        )}
        {bodyPartsLoading && <Loader />}
        <HorizontalScrollbar data={bodyParts} isBodyPart />
      </Box>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700px", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            vorderRaduis: "40px",
          }}
          height="76px"
          value={search}
          onChange={handleChange}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "100px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
