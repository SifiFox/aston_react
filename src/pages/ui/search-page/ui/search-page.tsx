import { useFavourites } from "@/features/favourites/hooks/use-favourites"
import { useHistory } from "@/features/history/hooks/use-history"
import { useFetchMoviesByKeywordQuery } from "@/shared/redux/store/services/movie-service"
import { ErrorFallback } from "@/shared/ui/error-fallback"
import { Header } from "@/widgets/header"
import { MoviesContent } from "@/widgets/movies-content"
import { SearchComponent } from "@/widgets/search"
import cls from "@pages/ui/page.module.scss"
import { memo } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useSearchParams } from "react-router-dom"

const SearchPage = ({ title }) => {
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get("keyword")
    const { movies, moviesCount, isError } = useFetchMoviesByKeywordQuery(
        keyword,
        {
            selectFromResult: ({ data, isError }) => ({
                movies: data?.movies,
                moviesCount: data?.moviesCount,
                isError: isError,
            }),
        },
    )
    useFavourites()
    useHistory()

    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <SearchComponent />
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
export default memo(SearchPage)
