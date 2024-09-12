import ApiRequest from "../../helper/ApiRequest";
import { useEffect, useState } from "react";
import { VideoCard } from "../pages/video/VideoCard";

import { showToast } from "../../helper/toastHelper";
import { API_URL } from "../../urls/apiUrl";

function Dashboard() {
  const [video, setVideo] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await ApiRequest.get(`${API_URL}video/all-videos/`);
      setVideo(response.data.data);
    } catch (error) {
      showToast(error.response.message, "error");
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 absolute left-[198px] top-[90px]">
        {video.length > 0
          ? video.map((item) => (
              <VideoCard key={item._id} item={item} potraitView={false} />
            ))
          : "No videos found"}
      </div>
    </div>
  );
}
export default Dashboard;
