type PosterProps = {
  imageUrl: string
  poster_path: string
  title: string
}

function Poster({ imageUrl, poster_path, title }: PosterProps) {
  return (
    <>
      <img
        src={`${imageUrl}${poster_path}`}
        alt={title}
        className="max-h-screen mx-auto lg:mx-0"
      />
    </>
  );
}

export default Poster;
