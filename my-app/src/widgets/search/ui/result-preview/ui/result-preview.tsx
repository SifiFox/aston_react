import { ResultList } from "@/widgets/search/ui/result-list/result-list"
import { type SearchData } from "@/widgets/search/ui/search"

import cls from "../../search.module.scss"

export const ResultPreview = ({ data }: { data: SearchData }) => {
    const { movies } = data

    return (
        <div className={cls.result}>
            {movies.length === 0 && <div>Ни одного фильма не найдено</div>}
            {movies.length > 0 && <ResultList movies={movies} />}
        </div>
    )
}
