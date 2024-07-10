import { type MovieBase } from "@/app/hooks/use-movies/types"
import { Card } from "antd"
import { Link } from "react-router-dom"

import cls from "./movie-card.module.scss"

const { Meta } = Card

export const MovieCard = (props: { movie: MovieBase }) => {
    const { movie } = props
    return (
        <Link to={`/${movie.kinopoiskId}`}>
            <Card
                className={cls.card}
                hoverable
                cover={<img alt="example" src={movie.posterUrl} />}
            >
                <Meta title={movie.nameRu} description={movie.year} />
            </Card>
        </Link>
    )
}
