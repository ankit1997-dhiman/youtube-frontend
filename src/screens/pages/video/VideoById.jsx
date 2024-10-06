import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiRequest from "../../../helper/ApiRequest";
import { API_URL } from "../../../urls/apiUrl";
import { showToast } from "../../../helper/toastHelper";
import dayjs from "dayjs";
import { VideoCard } from "./VideoCard";
import DashboardHeader from "../../dashboard/DashboardHeader";

const VideoById = () => {
  const { id } = useParams();

  const [videoById, setVideoById] = useState(null);
  const [video, setVideo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await ApiRequest.get(`${API_URL}video/${id}`);
      if (response?.data) setVideoById(response?.data?.data);
    } catch (error) {
      showToast("Video Id Is Not Valid", "error");
    }
  };
  const fetchVideos = async () => {
    try {
      const response = await ApiRequest.get(`${API_URL}video/all-videos/`);
      setVideo(response.data.data);
    } catch (error) {
      showToast(error.response.message, "error");
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
    fetchVideos();
  }, [id, setVideoById]);

  return (
    <>
      <DashboardHeader />
      <div className="flex gap-6 pt-24 px-4">
        {videoById && (
          <>
            <div className="w-3/4">
              <div className="">
                <video
                  controls
                  autoPlay
                  key={videoById.video}
                  poster={videoById.thumbnail ? videoById.thumbnail : ""}
                  className="h-[600px] object-cover w-full rounded-xl"
                >
                  <source src={videoById.video} type="video/mp4" />
                </video>
              </div>
              <div className="text-2xl font-bold pt-4">{videoById.title}</div>
              <div className="flex items-center justify-start gap-4 py-4">
                <div className="text-wrap break-words bg-slate-600 rounded-full text-center p-3 uppercase text-white flex items-center justify-center w-[65px] h-[65px]">
                  {videoById.userInfo
                    ? videoById.userInfo.fullName?.charAt(0)
                    : "User"}
                </div>
                <div className="">
                  <div className="text-base font-semibold capitalize">
                    {videoById.userInfo.fullName}
                  </div>
                  <div>0 Subscribers</div>
                </div>
              </div>

              <div className="bg-gray-500 p-3 rounded-xl text-white">
                <div className="pb-2">
                  <span className="font-semibold text-base ">
                    {videoById.views} views
                  </span>
                  <span className="pl-2 text-base">
                    {dayjs(videoById.createdAt).format("dddd, MMM D, h:mm A")}{" "}
                  </span>
                </div>
                <pre className="font-semibold text-sm">
                  {videoById.description}
                </pre>
              </div>
            </div>
          </>
        )}
        <div className="w-1/4">
          {video.map((item) => (
            <VideoCard key={item._id} item={item} potraitView={true} />
          ))}
        </div>
      </div>
    </>
  );
};
export default VideoById;
