export default function Post({ postInfo }) {
  const { link, linkimage, description } = postInfo;
  return (
    <div className="w-2/5 h-96 bg-white m-auto">
      <h1 className="text-2xl pt-3 ml-5">{description}</h1>
      <div className="w-auto h-3/4 mx-5 my-4 relative">
        <img src={linkimage} className="object-cover"></img>
        <button className="absolute rounded font-bold bg-opacity-70 hover:bg-opacity-100  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-MainWhite w-16 h-8">
          <a href={link} target="_blank">
            Assistir
          </a>
        </button>
      </div>
    </div>
  );
}
