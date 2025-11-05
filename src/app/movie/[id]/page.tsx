import Image from "next/image";

const getMovie = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

export default async function Movie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovie(id);
  const imagePath = movie.backdrop_path || movie.poster_path;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col  md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${imagePath}`}
            width={500}
            height={300}
            alt="Movie poster"
            priority={true}
            className="rounded-t-lg w-auto"
            placeholder="blur"
            blurDataURL="/spinner.svg"
          />
        ) : (
          <div className="flex items-center justify-center bg-gray-300 w-full h-full rounded-t-lg">
            No Image
          </div>
        )}
        <div className="text-lg mb-3 font-bold p-2">
          <h2>{movie.title || movie.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
