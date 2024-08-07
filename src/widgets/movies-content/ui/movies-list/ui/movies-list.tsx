import { type MovieBase } from "@/app/hooks/use-movies/types"
import { MovieCard } from "@/shared/ui/movie-card"
import "react-virtualized/styles.css"

import cls from "./movies-list.module.scss"

export const MoviesList = ({ movies }: { movies: MovieBase[] }) => {
    return (
        <div className={cls.moviesList}>
            {movies.map((item: MovieBase, index) => {
                return <MovieCard movie={item} key={item.kinopoiskId} />
            })}
        </div>
    )
}
