import { useMovies } from "@/app/hooks/use-movies/use-movies"
import cls from "@/pages/ui/page.module.scss"
import { Header } from "@/widgets/header"
import { MoviesList } from "@/widgets/movies-list"
import { type PageProps } from "@pages/types/types"
import { memo } from "react"

const MainPage = ({ title }: PageProps) => {
    const { items, total } = useMovies({})

    return (
        <>
            <Header />
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    <div className={cls.totalMovies}>
                        <h3>Всего: </h3>
                        <p>{total}</p>
                    </div>
                    {items?.length > 0 && <MoviesList movies={items} />}
                </div>
            </div>
        </>
    )
}

export default memo(MainPage)
