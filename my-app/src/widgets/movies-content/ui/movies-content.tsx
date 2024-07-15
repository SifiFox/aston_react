import { MoviesList } from "@/widgets/movies-content/ui/movies-list"
import cls from "@pages/ui/page.module.scss"

export const MoviesContent = ({ movies, moviesCount, isError }) => {
    if (isError) {
        if (!movies) {
            throw new Error("У вас нет избранных фильмов")
        }
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
            {movies?.length > 0 && <MoviesList movies={movies} />}
        </>
    )
}
