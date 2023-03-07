import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = () => {
    const { bodyParts, bodyPartsLoading, bodyPartsError } = useContext(ExerciseContext);
  return (
    <Stack className="vertical-scroll" direction="row" sx={{overflowX:"scroll",overflowY:"hidden",padding:"1rem 0"}}>
        {/* temperary-replace with circular loading and error alert */}
        {bodyPartsError && <h2>Something went wrong, check your connection and try again!</h2>}
        {bodyPartsLoading && <h2>Loading...</h2>}
        {bodyParts?.map((item) => (
            <Box
             key={item.id || item}
             itemID={item.id || item}
             title={item.id || item}
             flexDirection='row' 
             sx={{margin: {xs: "0 20px", md: "0 40px"}}}
            >
                <BodyPart item={item}/>
            </Box>
        ))}
    </Stack>
  )
}

export default HorizontalScrollbar