import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

interface Result {
  id: string | number;
  original_title: string;
  backdrop_path?: string;
  poster_path?: string;
  overview: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count?: number;
}

function Card({ result }: { result: Result }) {
  const imagePath = result.backdrop_path || result.poster_path;
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <div className="relative w-full aspect-video">
          {imagePath ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${imagePath}`}
              alt={result.title || result.name || "image not available"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 object-cover"
              placeholder="blur"
              blurDataURL="/spinner.svg"
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-300 text-gray-600 w-full h-full rounded-t-lg">
              No Image
            </div>
          )}
        </div>
      </Link>
      <div className="p-2 text-md">
        <p className="line-clamp-2 leading-relaxed">{result.overview}</p>
        <h2 className="truncate text-lg font-bold">
          {result.title || result.name}
        </h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <FiThumbsUp className="h-5 mr-1 ml-3" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export { Card };
