import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { BodyPartsContext } from "../context/BodyPartsContext";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = () => {
    const { bodyParts, loading, error } = useContext(BodyPartsContext);
  return (
    <Stack className="vertical-scroll" direction="row" sx={{overflowX:"scroll",overflowY:"hidden",padding:"1rem 0"}}>
        {/* temperary-replace with circular loading and error alert */}
        {error && <h2>{error.message}</h2>}
        {loading && <h2>Loading...</h2>}
        {bodyParts?.map((item) => (
            <Box
             key={item.id || item}
             itemID={item.id || item}
             title={item.id || item}
             m="0 40px"
             flexDirection='row' 
            >
                <BodyPart item={item}/>
            </Box>
        ))}
    </Stack>
  )
}

export default HorizontalScrollbar