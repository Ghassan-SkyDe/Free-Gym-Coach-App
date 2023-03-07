// import { Typography } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import icon from "../assets/icons/gymClass.svg";
import { SelectedBodyPartContext } from "../context/SelectedBodyPartContext";
import { autoScroll } from "../utils/autoScroll";

const BodyPart = ({ item }) => {
  const { selectedBodyPart, dispatchSelectedBodyPart } = useContext(SelectedBodyPartContext);
  const handleSelectedBodyPart = () => {
    // filtering for results should add----fixIt
    dispatchSelectedBodyPart({type:"SET_SELECTED_BODY_PART",payload: item});
    // scrolls to top: xs:1300 md:1900
    autoScroll();
    
  }
  return (
    <Stack onClick={handleSelectedBodyPart} type="button" alignItems="center" justifyContent="center"
     className={`bodyPart-card ${selectedBodyPart === item ? "selected" : ""}`} >
      <img src={icon} alt="gym class icon" width="50px" height="auto"/>
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart