import { type MovieBase } from "@/app/hooks/use-movies/types"
import { MovieCard } from "@/shared/ui/movie-card"
import { List } from "antd"
import VirtualList from "rc-virtual-list"
import React from "react"

import cls from "./movies-list.module.scss"

export const MoviesList = ({ movies }: { movies: MovieBase[] }) => {
    console.log(movies)
    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        console.log("test")
    }
    return (
        <div className={cls.moviesList}>
            {movies.map((item: MovieBase, index) => {
                return <MovieCard movie={item} key={index} />
            })}

        </div>
    )
}