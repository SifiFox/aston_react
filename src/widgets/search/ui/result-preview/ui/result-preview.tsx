import { type MoviesBase } from "@/app/hooks/use-movies/types"
import { ResultList } from "@/widgets/search/ui/result-list/result-list"
import { type ForwardedRef, forwardRef } from "react"

import cls from "../../search.module.scss"

export const ResultPreview = forwardRef(
    ({ data }: { data: MoviesBase }, ref: ForwardedRef<HTMLDivElement>) => {
        const { items: movies } = data
        return (
            <div className={cls.result} ref={ref}>
                {movies.length === 0 && <div>Ни одного фильма не найдено</div>}
                {movies.length > 0 && <ResultList movies={movies} />}
            </div>
        )
    },
)
