import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/SportIcon.svg";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <a href="/">
          <img src={Logo} alt="Logo" width="200px" height="40px" />
        </a>
        <Typography>
          {" "}
          Powered by{" "}
          <a href="https://github.com/Sky-De" target="_blank" rel="noreferrer">
            SkyDe
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
