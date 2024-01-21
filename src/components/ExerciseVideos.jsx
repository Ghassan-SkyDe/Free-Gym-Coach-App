import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const ExerciseVideos = ({ data, name }) => {
  console.log(data);
  // loading for load videos --fixIt
  return (
    <Box sx={{ marginTop: { lg: "100px", sm: "20px" } }} p="20px">
      <Typography textAlign="center" variant="h3" mb="50px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { sm: "row" },
          gap: { lg: "50px", xs: "20px" },
        }}
      >
        {data?.slice(0, 9).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography ml="10px" variant="h6" color="#000">
                {item.video.title.slice(0, 30)} ...
              </Typography>
              <Typography ml="10px" color="#7f7f7f">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
