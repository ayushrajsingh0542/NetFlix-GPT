function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[22%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl ml-6 font-bold">{title}</h1>
      <p className="p-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          <i class="fa-solid fa-play"></i>&nbsp;&nbsp;Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-80 rounded-lg mx-2 hover:bg-opacity-100"><i class="fa-solid fa-circle-info"></i>
          &nbsp;&nbsp;More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
