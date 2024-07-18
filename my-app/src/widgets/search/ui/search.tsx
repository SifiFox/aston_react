import { useDebounce } from "@/app/hooks/use-debounce/use-debounce"
import { type MovieBase } from "@/app/hooks/use-movies/types"
import { setHistory } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useLazyFetchMoviesByKeywordQuery } from "@/shared/redux/store/services/movie-service"
import { ResultPreview } from "@/widgets/search/ui/result-preview"
import { Input } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { type Nullable } from "vitest"

import cls from "./search.module.scss"

const { Search } = Input

export interface SearchData {
    movies: MovieBase[]
    moviesCount: number
    moviesPage: number
}

enum SourceTypes {
    INPUT = "input",
    CLEAR = "clear",
}
interface SourceType {
    source: SourceTypes
}

export const SearchComponent = () => {
    const [searchResult, setSearchResult] = useState<Nullable<SearchData>>(null)
    const [isResultVisible, setIsResultVisible] = useState(false)
    const [fetchMovies, { data: searchedMovies }] =
        useLazyFetchMoviesByKeywordQuery()

    const navigation = useNavigate()

    const handleClickSearch = (value, _t, sourceType: SourceType) => {
        const { source } = sourceType
        if (source === SourceTypes.INPUT) {
            setHistory(value).catch(err => {
                console.log(err)
            })
            navigation(`${RoutePath.search}/${value}`)
        }
    }

    const debouncedHandleChange = useDebounce(el => {
        fetchMovies(el.currentTarget.value)
        if (el.currentTarget.value) {
            setIsResultVisible(true)
        } else {
            setIsResultVisible(false)
        }
    }, 800)

    useEffect(() => {
        if (searchedMovies) {
            setSearchResult(searchedMovies)
        }
    }, [searchedMovies])

    return (
        <div className={cls.searchWrapper}>
            <Search
                placeholder="Введите название фильма"
                allowClear
                size="large"
                onSearch={handleClickSearch}
                onChange={debouncedHandleChange}
            />
            {searchResult && isResultVisible && (
                <ResultPreview data={searchResult} />
            )}
        </div>
    )
}
