import { ResultList } from "@/widgets/search/ui/result-list/result-list"
import { type SearchData } from "@/widgets/search/ui/search"
import { forwardRef } from "react"

import cls from "../../search.module.scss"

export const ResultPreview = forwardRef(
    ({ data }: { data: SearchData }, ref) => {
        const { movies } = data
        return (
            <div className={cls.result} ref={ref}>
                {movies.length === 0 && <div>Ни одного фильма не найдено</div>}
                {movies.length > 0 && <ResultList movies={movies} />}
            </div>
        )
    },
)
