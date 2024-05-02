/* eslint-disable react/prop-types */

import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, marginLeft, direction }) => {
  return (
    <Stack
      direction={{ md: direction, xs: "row" } || "row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
      sx={{ ml: marginLeft }}
    >
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
