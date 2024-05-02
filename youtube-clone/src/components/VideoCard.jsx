/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelUrl,
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "300px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "0px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { md: "328px", xs: "358px" }, height: 180 }}
        ></CardMedia>
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
          width: { md: "280px", xs: "326px" },
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color={"gray"}>
            {snippet?.channelTitle || demoChannelTitle}
            {
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            }
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
