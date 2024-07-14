import { useFavourites } from "@/features/favourites/hooks/use-favourites"
import cls from "@/pages/ui/page.module.scss"
import { useAppSelector } from "@/shared/redux/hooks"
import { useFetchAllMoviesQuery } from "@/shared/redux/store/services/movie-service"
import { ErrorFallback } from "@/shared/ui/error-fallback"
import { Header } from "@/widgets/header"
import { MoviesContent } from "@/widgets/movies-content"
import { type PageProps } from "@pages/types/types"
import { useEffect, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"


const FavouritesPage = ({ title }: PageProps) => {
    const { movies: userFavourites } = useAppSelector(state => state.favourites)
    const { movies, isError } = useFetchAllMoviesQuery(undefined, {
        selectFromResult: ({ data, isError }) => ({
            movies: data?.movies,
            moviesCount: data?.moviesCount,
            isError: isError,
        }),
    })
    useFavourites()
    const [favouriteMoviesData, setFavouriteMoviesData] = useState()

    useEffect(() => {
        if (userFavourites && movies) {
            setFavouriteMoviesData(
                movies.filter(movie =>
                    userFavourites.some(
                        favourite =>
                            String(favourite.kinopoiskId) === String(movie.kinopoiskId),
                    ),
                ),
            )
        }
    }, [movies, userFavourites])

    if (userFavourites) {
        return (
            <>
                <Header />
                <div className={cls.pageWrapper}>
                    <h1 className={cls.pageTitle}>{title}</h1>
                    <div className={cls.pageContent}>
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <MoviesContent
                                movies={favouriteMoviesData}
                                moviesCount={userFavourites.length}
                                isError={isError}
                            />
                        </ErrorBoundary>
                    </div>
                </div>
            </>
        )
    }
}

export default FavouritesPage