import cls from "@/pages/ui/page.module.scss"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { useFetchAllMoviesQuery } from "@/shared/redux/store/services/movie-service"
import { setFavouritesStore} from "@/shared/redux/store/slices/favourites-slice"
import { ErrorFallback } from "@/shared/ui/error-fallback"
import { Header } from "@/widgets/header"
import { MoviesContent } from "@/widgets/movies-content"
import { type PageProps } from "@pages/types/types"
import { useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"
import {getFavouritesByUser} from "@/shared/api/api";


const FavouritesPage = ({ title }: PageProps) => {
    const dispatch = useAppDispatch()
    const { movies: userFavourites } = useAppSelector(state => state.favourites)
    const { id } = useAppSelector(state => state.user)

    const { movies, isError } = useFetchAllMoviesQuery(undefined, {
        selectFromResult: ({ data, isError }) => ({
            movies: data?.movies,
            moviesCount: data?.moviesCount,
            isError: isError,
        }),
    })


    useEffect(() => {
        if (movies) {
            getFavouritesByUser(id).then(res => {
                dispatch(setFavouritesStore(res.movies))
            })
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
                            movies={userFavourites?.movies}
                            moviesCount={userFavourites?.movies?.length}
                            isError={isError}
                        />
                    </ErrorBoundary>
                </div>
            </div>
        </>
    )
}

export default FavouritesPage