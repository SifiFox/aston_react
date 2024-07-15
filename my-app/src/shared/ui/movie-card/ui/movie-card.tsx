import { type MovieBase } from "@/app/hooks/use-movies/types"
import { setFavourites } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { makeGetIsMovieFavourite } from "@/shared/redux/store/selectors/favourites-selector"
import {
    addMovie,
    removeMovie,
} from "@/shared/redux/store/slices/favourites-slice"
import { StarFilled, StarOutlined } from "@ant-design/icons"
import { Card, message } from "antd"
import { Link, useNavigate } from "react-router-dom"

import cls from "./movie-card.module.scss"

const { Meta } = Card

export const MovieCard = (props: { movie: MovieBase }) => {
    const { movie } = props
    const navigation = useNavigate()
    const dispatch = useAppDispatch()

    const { isAuth } = useAppSelector(state => state.user)
    const isFavourite = useAppSelector(state =>
        makeGetIsMovieFavourite()(state.favourites, movie.kinopoiskId),
    )

    const handleClickFavourite = () => {
        if (!isAuth) {
            message.error(
                "Действие доступно только авторизованным пользователям",
            )
            navigation(RoutePath.login)
        }
        setFavourites(movie).catch(err => {
            message.error(err)
        })
        if (isFavourite) {
            dispatch(removeMovie(movie))
        } else {
            dispatch(addMovie(movie))
        }
    }

    return (
        <Card
            className={cls.card}
            hoverable
            cover={<img alt="example" src={movie.posterUrl} />}
            actions={[
                isFavourite ? (
                    <StarFilled onClick={handleClickFavourite} />
                ) : (
                    <StarOutlined onClick={handleClickFavourite} />
                ),
            ]}
        >
            <Link to={`/${movie.kinopoiskId}`}>
                <Meta title={movie.nameRu} description={movie.year} />
            </Link>
        </Card>
    )
}
