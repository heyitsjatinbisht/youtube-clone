import React from "react";
import { useParams } from "react-router-dom";

interface VideoDetailPageProps {
  videoId: string;
}

const VideoDetailPage: React.FC<VideoDetailPageProps> = () => {
  const { videoId } = useParams();

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src={embedUrl}
        title="YouTube Video"
        allowFullScreen
      ></iframe>
      <p>{}</p>
    </div>
  );
};

export default VideoDetailPage;
