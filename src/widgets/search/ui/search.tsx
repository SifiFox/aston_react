import { useClickOutside } from "@/app/hooks/use-click-outside/use-click-outside"
import { useDebounce } from "@/app/hooks/use-debounce/use-debounce"
import { type MovieBase } from "@/app/hooks/use-movies/types"
import { setHistory } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { getUserSelector } from "@/shared/redux/store/selectors/user-selector"
import { useLazyFetchMoviesByKeywordQuery } from "@/shared/redux/store/services/movie-service"
import { setSearchQuery } from "@/shared/redux/store/slices/search-slice"
import { ResultPreview } from "@/widgets/search/ui/result-preview"
import { Input, message } from "antd"
import { useRef, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

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
    const [isResultVisible, setIsResultVisible] = useState(false)
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get("keyword")
    const { isAuth } = useAppSelector(getUserSelector)

    const navigation = useNavigate()
    const dispatch = useAppDispatch()

    const inputWrapperRef = useRef(null)
    const inputRef = useRef(null)
    const resultRef = useRef(null)

    const [fetchMovies, { data: searchedMovies, isLoading }] =
        useLazyFetchMoviesByKeywordQuery()

    const handleClickSearch = (value, _t, sourceType: SourceType) => {
        const { source } = sourceType
        if (source === SourceTypes.INPUT) {
            if (isAuth) {
                setHistory(value).catch(err => {
                    message.error(err.message)
                })
            }
            dispatch(setSearchQuery(value))
            navigation(`${RoutePath.search}?keyword=${value}`)
        }
    }

    const debouncedHandleChange = useDebounce(el => {
        fetchMovies(el.currentTarget.value)
        if (el.currentTarget.value) {
            setIsResultVisible(true)
            dispatch(setSearchQuery(el.currentTarget.value))
        } else {
            setIsResultVisible(false)
            dispatch(setSearchQuery(null))
        }
    }, 800)

    const onFocus = () => {
        if (!searchedMovies && inputRef.current.input.value !== "") {
            fetchMovies(inputRef.current.input.value)
        }
        setIsResultVisible(true)
    }
    const handleClickOutside = e => {
        if (e.target !== resultRef.current) {
            setIsResultVisible(false)
        }
    }
    useClickOutside(inputWrapperRef, handleClickOutside)

    return (
        <div className={cls.searchWrapper}>
            <div ref={inputWrapperRef}>
                <Search
                    placeholder="Введите название фильма"
                    allowClear
                    size="large"
                    onSearch={handleClickSearch}
                    onChange={debouncedHandleChange}
                    defaultValue={keyword}
                    onFocus={onFocus}
                    loading={isLoading}
                    ref={inputRef}
                />
            </div>
            {searchedMovies && isResultVisible && (
                <ResultPreview data={searchedMovies} ref={resultRef} />
            )}
        </div>
    )
}
