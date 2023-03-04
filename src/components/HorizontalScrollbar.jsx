import { Box } from "@mui/system";
import { useContext } from "react";
import { BodyPartsContext } from "../context/bodyParts";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data }) => {
    const { bodyParts, loading, error } = useContext(BodyPartsContext);
    console.log(`from scroll ${bodyParts}`);
  return (
    <div>
        {data?.map((item) => (
            <Box
             key={item.id || item}
             itemID={item.id || item}
             title={item.id || item}
             m="0 40px" 
            >
                <BodyPart/>
            </Box>
        ))}
    </div>
  )
}

export default HorizontalScrollbar