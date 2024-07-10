import type { MovieDetails } from "@/app/hooks/use-movies/types"
import { MovieInfoList } from "@/widgets/movie/ui/movie-info/movie-info-list/movie-info-list"

import cls from "../movie.module.scss"

export const MovieInfo = (props: { movie: MovieDetails }) => {
    const { movie } = props
    return (
        <div className={cls.info}>
            <h4 className={cls.movieTitle}>{movie.nameOriginal}</h4>
            <ul className={cls.infoList}>
                <MovieInfoList movie={movie} />
            </ul>
        </div>
    )
}
