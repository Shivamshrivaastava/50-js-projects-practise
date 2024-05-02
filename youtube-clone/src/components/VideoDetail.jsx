import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(videoDetail);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight={"50vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <Typography
              marginTop={"-10px"}
              color={"#fff"}
              variant="h5"
              fontWeight={"bold"}
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ color: "#fff" }}
              py={1}
              px={2}
              marginTop={"-15px"}
              alignItems={"center"}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color={"#fff"}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                      ml: "5px",
                    }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Videos videos={videos} direction={"column"} marginLeft={"25px"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
