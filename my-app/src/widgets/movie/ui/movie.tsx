import type { MovieDetails } from "@/app/hooks/use-movies/types"
import { MovieInfo } from "@/widgets/movie/ui/movie-info/movie-info"
import { MoviePoster } from "@/widgets/movie/ui/movie-poster/movie-poster"

import cls from "./movie.module.scss"

export const Movie = (props: { movie: MovieDetails }) => {
    const { movie } = props

    return (
        <div className={cls.movie}>
            <div className={cls.title}>{movie.nameEn}</div>
            <div className={cls.content}>
                <MoviePoster imageUrl={movie?.posterUrl} alt={movie.nameEn} />
                <MovieInfo movie={movie} />
            </div>
        </div>
    )
}
