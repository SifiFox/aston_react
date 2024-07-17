import { useFetchMoviesByKeywordQuery } from "@/shared/redux/store/services/movie-service"
import { ErrorFallback } from "@/shared/ui/error-fallback"
import { Loading } from "@/shared/ui/loading"
import { Header } from "@/widgets/header"
import { MoviesContent } from "@/widgets/movies-content"
import cls from "@pages/ui/page.module.scss"
import { ErrorBoundary } from "react-error-boundary"
import { useParams } from "react-router-dom"

export const SearchPage = ({ title }) => {
    const { keyword } = useParams()
    const { data, isLoading, isError } = useFetchMoviesByKeywordQuery(keyword)

    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        {isLoading && <Loading />}
                        {data && (
                            <MoviesContent
                                movies={data.movies}
                                moviesCount={data.moviesCount}
                                isError={isError}
                            />
                        )}
                    </ErrorBoundary>
                </div>
            </div>
        </>
    )
}
