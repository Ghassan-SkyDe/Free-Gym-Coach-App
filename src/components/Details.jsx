import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage2 from "../assets/icons/equipment2.png";

const Details = ({ data }) => {
  const { bodyPart, gifUrl, name, target, equipment } = data;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
      title: "bodyPart",
    },
    {
      icon: TargetImage,
      name: target,
      title: "target",
    },
    {
      icon: EquipmentImage2,
      name: equipment,
      title: "equipment",
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.
          <br />
          <span style={{ textTransform: "capitalize", color: "#ff2625" }}>
            {name}{" "}
          </span>
          bup is one of the best <br /> exercises to target your
          <span style={{ textTransform: "capitalize", color: "#ff2625" }}>
            {" "}
            {target}
          </span>
          . It will help you improve your <br /> mood and gain energy.
        </Typography>
        <Stack
          gap="30px"
          sx={{
            flexDirection: { lg: "column", md: "row", sm: "row" },
            marginTop: { lg: "20px", md: "40px", sm: "40px", xs: "20px" },
          }}
        >
          {extraDetail.map((item, index) => (
            <Stack key={index} direction="row" gap="24px" alignItems="center">
              <Button
                title={item.title}
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  width="50px"
                  height="50px"
                />
              </Button>
              <Typography textTransform="capitalize" variant="h5">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Details;
