import { useMovies } from "@/app/hooks/use-movies/use-movies"
import { Header } from "@/widgets/header"
import { Movie } from "@/widgets/movie/ui/movie"
import { type PageProps } from "@pages/types/types"
import cls from "@pages/ui/page.module.scss"
import { memo } from "react"
import { useParams } from "react-router-dom"

const MoviePage = ({ title }: PageProps) => {
    const { id } = useParams()
    const movieInfo = useMovies({ id: id })

    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    {movieInfo && !Array.isArray(movieInfo) && (
                        <Movie movie={movieInfo} />
                    )}
                </div>
            </div>
        </>
    )
}

export default memo(MoviePage)
