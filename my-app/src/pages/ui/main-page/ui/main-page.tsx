import cls from "@/pages/ui/page.module.scss"
import { useFetchAllMoviesQuery } from "@/shared/redux/store/services/movie-service"
import { Header } from "@/widgets/header"
import { type PageProps } from "@pages/types/types"
import {memo} from "react"
import {MoviesContent} from "@/widgets/movies-content";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorFallback} from "@/shared/ui/error-fallback";


const MainPage = ({ title }: PageProps) => {
    const { movies, moviesCount, isError } = useFetchAllMoviesQuery(undefined, {
        selectFromResult: ({ data, isError }) => ({
            movies: data?.movies,
            moviesCount: data?.moviesCount,
            isError: isError
        }),
    })

    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                    >
                        <MoviesContent movies={movies} moviesCount={moviesCount} isError={isError}/>
                    </ErrorBoundary>
                </div>
            </div>
        </>
    )
}

export default memo(MainPage)