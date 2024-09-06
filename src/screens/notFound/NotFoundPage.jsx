import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center flex-col">
      <div className="text-black text-4xl">
        <span className="text-red-900 underline text-5xl">Opps !</span>{" "}
        Something Went Wrong
      </div>
      <div className="mt-8">
        <Link to="/">
          <button className="border-2 border-black px-8 py-3 hover:text-white hover:border-white text-base">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
export default NotFoundPage;
