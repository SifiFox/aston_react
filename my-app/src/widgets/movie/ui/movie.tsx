import cls from './movie.module.scss'
import type { FC } from "react";
import type { MovieDetails } from "@/app/hooks/use-movies/types";
import { MoviePoster } from "@/widgets/movie/ui/movie-poster/movie-poster";
import { MovieInfo } from "@/widgets/movie/ui/movie-info/movie-info";

interface MovieProps {
  movie: MovieDetails
}

export const Movie: FC <MovieProps> = (props) => {
  const {movie} = props
  return (
    <div className={cls.movie}>
      <div className={cls.title}>{movie.nameEn}</div>
      <div className={cls.content}>
        <MoviePoster imageUrl={movie?.posterUrl} alt={movie.nameEn}/>
        <MovieInfo movie={movie}/>
      </div>
    </div>
  )
}