import { BASE_API_URL } from "@/app/api/api"
import { getFullQuery } from "@/app/hooks/use-movies/helpers"
import type {
    MovieBase,
    MovieDetails,
    Postfixes,
} from "@/app/hooks/use-movies/types"
import { message } from "antd"
import { useEffect, useState } from "react"

export interface APIParams {
    id?: string
    postfix?: Postfixes
}

export function useMovies(params: APIParams): MovieBase[] | MovieDetails {
    const [movies, setMovies] = useState([])
    const fullQuery = getFullQuery({
        base: `${BASE_API_URL}/films`,
        params: params,
    })

    useEffect(() => {
        fetch(fullQuery, {
            method: "GET",
            headers: {
                "X-API-KEY": `${import.meta.env.VITE_API_KEY}`,
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(json => {
                setMovies(json)
            })
            .catch(err => message.error(err.message))
    }, [fullQuery])

    return movies
}
