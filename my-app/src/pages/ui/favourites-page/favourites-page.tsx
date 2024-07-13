import { useAuth } from "@/app/hooks/use-auth/use-auth"
import cls from "@/pages/ui/page.module.scss"
import { getFavouritesByUser } from "@/shared/api/ls-api/ls-api"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { useFetchAllMoviesQuery } from "@/shared/redux/store/services/movie-service"
import { setFavouritesStore} from "@/shared/redux/store/slices/favourites-slice"
import { ErrorFallback } from "@/shared/ui/error-fallback"
import { Header } from "@/widgets/header"
import { MoviesContent } from "@/widgets/movies-content"
import { type PageProps } from "@pages/types/types"
import { useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"


const FavouritesPage = ({ title }: PageProps) => {
    const { id } = useAuth()
    const dispatch = useAppDispatch()
    const { movies: userFavourites } = useAppSelector(state => state.favourites)

    const { movies, moviesCount, isError } = useFetchAllMoviesQuery(undefined, {
        selectFromResult: ({ data, isError }) => ({
            movies: data?.movies,
            moviesCount: data?.moviesCount,
            isError: isError,
        }),
    })

    useEffect(() => {
        if (movies) {
            dispatch(setFavouritesStore(getFavouritesByUser(id)))
        }
    }, [movies])

    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <MoviesContent
                            movies={userFavourites.movies}
                            moviesCount={userFavourites.movies?.length}
                            isError={isError}
                        />
                    </ErrorBoundary>
                </div>
            </div>
        </>
    )
}

export default FavouritesPage