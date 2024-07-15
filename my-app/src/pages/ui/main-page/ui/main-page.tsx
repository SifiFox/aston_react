import { useFavourites } from "@/features/favourites/hooks/use-favourites"
import cls from "@/pages/ui/page.module.scss"
import { useFetchAllMoviesQuery } from "@/shared/redux/store/services/movie-service"
import { ErrorFallback } from "@/shared/ui/error-fallback"
import { Header } from "@/widgets/header"
import { MoviesContent } from "@/widgets/movies-content"
import { type PageProps } from "@pages/types/types"
import PropTypes from "prop-types"
import { memo, useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"

const MainPage = ({ title }: PageProps) => {
    const { movies, moviesCount, isError } = useFetchAllMoviesQuery(undefined, {
        selectFromResult: ({ data, isError }) => ({
            movies: data?.movies,
            moviesCount: data?.moviesCount,
            isError: isError,
        }),
    })
    useFavourites()

    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <MoviesContent
                            movies={movies}
                            moviesCount={moviesCount}
                            isError={isError}
                        />
                    </ErrorBoundary>
                </div>
            </div>
        </>
    )
}

MainPage.propTypes = {
    title: PropTypes.string.isRequired,
}

export default memo(MainPage)
