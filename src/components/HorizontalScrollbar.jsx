import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, isBodyPart }) => {
  return (
    <Stack className="vertical-scroll" direction="row" sx={{overflowX:"scroll",overflowY:"hidden",padding: isBodyPart? "1rem 0":"2rem 0"}}>
        {data?.map((item) => (
            <Box
             key={item.id || item}
             itemID={item.id || item}
             title={item.id || item}
             flexDirection='row' 
             sx={{margin: {xs: "0 20px", md: "0 40px"}}}
            >
                {isBodyPart ? <BodyPart bodyPart={item}/> : <ExerciseCard exercise={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default HorizontalScrollbar