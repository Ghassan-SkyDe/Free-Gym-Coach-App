// import { Typography } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import icon from "../assets/icons/gymClass.svg";
import { SelectedBodyPartContext } from "../context/SelectedBodyPartContext";

const BodyPart = ({ item }) => {
  const { selectedBodyPart, dispatchSelectedBodyPart } = useContext(SelectedBodyPartContext);
  const handleSelectedBodyPart = () => {
    dispatchSelectedBodyPart({type:"SET_SELECTED_BODY_PART",payload: item});

    if(window.innerWidth >= 1200) window.scrollTo({top: 1900, behavior: "smooth"});
    else window.scrollTo({top: 1300, behavior: "smooth"});
    
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