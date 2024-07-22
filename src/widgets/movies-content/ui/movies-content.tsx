import { type MovieBase } from "@/app/hooks/use-movies/types"
import { MoviesList } from "@/widgets/movies-content/ui/movies-list"
import cls from "@pages/ui/page.module.scss"
import { Typography } from "antd"

export const MoviesContent = ({
    movies,
    moviesCount,
    isError,
}: {
    movies: MovieBase[]
    moviesCount: number
    isError: boolean
}) => {
    if (isError) {
        throw new Error("Не удалось загрузить фильмы")
    }

    return (
        <>
            {movies && (
                <div className={cls.totalMovies}>
                    <h3>Всего: </h3>
                    <p>{moviesCount}</p>
                </div>
            )}
            {moviesCount === 0 && (
                <Typography.Title>Нет фильмов</Typography.Title>
            )}
            {movies?.length > 0 && <MoviesList movies={movies} />}
        </>
    )
}
