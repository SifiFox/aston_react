import { useAuth } from "@/app/hooks/use-auth/use-auth"
import { type MovieBase } from "@/app/hooks/use-movies/types"
import { isFavourite, setFavourites } from "@/shared/api/api"
import { RoutePath } from "@/shared/config/route-config/route-config"
import { StarFilled, StarOutlined } from "@ant-design/icons"
import { Card, message } from "antd"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import cls from "./movie-card.module.scss"
import {useAppDispatch} from "@/shared/redux/hooks";
import {setFavouritesStore} from "@/shared/redux/store/slices/favourites-slice";
// import {getFavouritesByUser} from "@/shared/api/ls-api/ls-api";


const { Meta } = Card

export const MovieCard = (props: { movie: MovieBase }) => {
    const { movie } = props
    const navigation = useNavigate()
    const [isMovieFavourite, setIsMovieFavourite] = useState(
        // isAuth ? isFavourite(movie) : false,
    )

    const handleClickFavourite = () => {
        // if (isAuth) {
        //     message.error(
        //         "Действие доступно только авторизованным пользователям",
        //     )
        //     navigation(RoutePath.login)
        // } else {
        //     setFavourites(movie)
        //     setIsMovieFavourite(isFavourite(movie))
        //     // dispatch(setFavouritesStore(getFavouritesByUser(id)))
        // }
    }

    return (
        <Card
            className={cls.card}
            hoverable
            cover={<img alt="example" src={movie.posterUrl} />}
            actions={[
                isMovieFavourite ? (
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