import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "../index.css";
import VideoDetail from "./VideoDetail";
import useVideos from "../Hooks/useVideos";

interface VideoDetailPageProps {
  videoId: string;
}

const VideoDetailPage: React.FC<VideoDetailPageProps> = () => {
  const { videoId } = useParams();

  const { data } = useVideos();

  const video = data?.pages
    .flatMap((page) => page.items)
    .find((video) => video.id === videoId);
  if (!video) {
    return <p>Video not found</p>;
  }
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <Header
        toggleSidebar={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className="video_container">
        <iframe
          className="video_player"
          src={embedUrl}
          title="YouTube Video"
          allowFullScreen
        ></iframe>
        <VideoDetail snippet={video.snippet} statistics={video.statistics} />
      </div>
    </>
  );
};

export default VideoDetailPage;
