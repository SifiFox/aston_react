import type { MovieDetails } from "@/app/hooks/use-movies/types"
import { useFavourites } from "@/features/favourites/hooks/use-favourites"
import { useAppSelector } from "@/shared/redux/hooks"
import { makeGetIsMovieFavourite } from "@/shared/redux/store/selectors/favourites-selector"
import { MovieInfo } from "@/widgets/movie/ui/movie-info/movie-info"
import { MoviePoster } from "@/widgets/movie/ui/movie-poster/movie-poster"

import cls from "./movie.module.scss"

export const Movie = (props: { movie: MovieDetails }) => {
    const { movie } = props
    useFavourites()
    const isFavourite = useAppSelector(state =>
        makeGetIsMovieFavourite()(state.favourites, movie.kinopoiskId),
    )

    return (
        <div className={cls.movie}>
            <div className={cls.title}>{movie.nameEn}</div>
            <div className={cls.content}>
                <MoviePoster imageUrl={movie?.posterUrl} alt={movie.nameEn} />
                <MovieInfo isFavourite={isFavourite} movie={movie} />
            </div>
        </div>
    )
}
