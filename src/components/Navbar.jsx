import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import Logo from "../assets/images/SportIcon.svg";
import "./style.css";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ gap: { sm: "122px", xs: "40px"}, mt: { sm: "32px", xs: "20px"}, justifyContent:"none"}}>
      <Link to="/">
       <img width="48px" height="48px"  src={Logo} alt="Logo" style={{margin:"0 20px"}}/>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" >
        <Link to="/" className="link" style={{borderBottom:"3px solid #FF2625"}}>Home</Link>
        <a href="#exercises" className="link">Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar