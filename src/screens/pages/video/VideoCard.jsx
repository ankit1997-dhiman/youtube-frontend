import dayjs from "dayjs";

export const VideoCard = ({ key, item }) => {
  const { title, owner, createdAt, thumbnail, views, video } = item;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full " key={key}>
      <div className="">
        <video
          controls
          poster={thumbnail ? "thumbnail" : ""}
          className="h-[230px] object-cover w-full"
        >
          <source src={video ? video : ""} type="video/mp4" />
        </video>
      </div>
      <div className="flex items-center justify-start gap-4 py-4">
        <div className="w-12 text-wrap break-words bg-slate-600 rounded-full text-center p-3 ">
          {owner ? owner?.charAt(1) : "-"}
        </div>
        <div className="">
          <div className="text-lg font-bold">{title}</div>
          <div className="text-base font-semibold">{owner} </div>
          <div>
            <span className="font-semibold text-sm ">{views}</span>
            <span className="pl-2 text-sm">
              {dayjs(createdAt).format("dddd, MMM D, h:mm A")}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
