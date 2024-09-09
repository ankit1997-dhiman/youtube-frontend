import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { DASHBOARD_URLS } from "../../../urls/dashboardUrls";

export const VideoCard = ({ item, potraitView }) => {
  const { title, _id, owner, userInfo, createdAt, thumbnail, views, video } =
    item;

  return (
    <Link
      to={`${DASHBOARD_URLS.VIDEO}${_id}`}
      className={`${
        potraitView ? "p-0" : "p-4 bg-white  rounded-lg shadow-md h-full"
      }   `}
    >
      <div className={`${potraitView ? "flex gap-2 pb-2" : ""} `}>
        <div className="">
          <video
            controls={potraitView ? false : true}
            poster={thumbnail ? thumbnail : ""}
            className={`${
              potraitView
                ? "h-[100px] w-[172px] object-cover rounded-md"
                : "h-[230px] object-cover w-full"
            }`}
          >
            <source src={video ? video : ""} type="video/mp4" />
          </video>
        </div>
        <div
          className={`${
            potraitView
              ? "flex flex-col"
              : "flex items-center justify-start gap-4 py-4"
          }`}
        >
          {potraitView ? (
            <></>
          ) : (
            <div className="w-12 text-wrap break-words bg-slate-600 rounded-full text-center p-3 uppercase text-white">
              {userInfo ? userInfo.fullName?.charAt(0) : "User"}
            </div>
          )}

          <div className="">
            <div className="text-lg font-bold">{title}</div>
            <div className="text-base font-semibold capitalize">
              {userInfo.fullName}{" "}
            </div>
            <div>
              <span className="font-semibold text-sm ">{views} views</span>
              <span className="pl-2 text-sm">
                {dayjs(createdAt).format("ddd, MMM D")}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
