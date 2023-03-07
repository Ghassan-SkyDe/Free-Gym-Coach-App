import { Box, Button, Typography } from "@mui/material";
import Carousel from "./Carousel";
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px"}, ml: { sm: "50px"}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
      <Typography fontWeight="700" mb="23px" mt="30px" sx={{fontSize:{ lg: "44px", xs: "40px"}}}>Sweat, Smile <br/> and Repeat</Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>Check out the most effective exercises</Typography>
      <Button className="hero-btn" variant="contained" color="error" href="#exercises" sx={{backgroundColor:'#ff2625', padding:"12px"}}>EXPLORE EXERCISES</Button>
      {/* may need change to display none intead of opacity 0-- check befor deploy */}
      <Typography className="heroTitle">Exercise</Typography>
      <div className="hero-banner-img"><Carousel/></div>
      
    </Box>
  )
}

export default HeroBanner