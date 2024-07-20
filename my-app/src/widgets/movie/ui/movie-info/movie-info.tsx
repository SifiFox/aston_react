import type { MovieDetails } from "@/app/hooks/use-movies/types"
import { setFavourites } from "@/shared/api/api"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { getUserSelector } from "@/shared/redux/store/selectors/user-selector"
import {
    addMovie,
    removeMovie,
} from "@/shared/redux/store/slices/favourites-slice"
import { MovieInfoList } from "@/widgets/movie/ui/movie-info/movie-info-list/movie-info-list"
import { StarFilled, StarOutlined } from "@ant-design/icons"
import { Button, message } from "antd"

import cls from "../movie.module.scss"

export const MovieInfo = (props: {
    movie: MovieDetails
    isFavourite: boolean
}) => {
    const { movie, isFavourite } = props
    const dispatch = useAppDispatch()
    const { isAuth } = useAppSelector(getUserSelector)

    const handleClick = () => {
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
        <div className={cls.info}>
            <div>
                {isAuth && (
                    <Button onClick={handleClick}>
                        {isFavourite ? <StarFilled /> : <StarOutlined />}
                    </Button>
                )}

                <h4 className={cls.movieTitle}>{movie.nameOriginal}</h4>
            </div>
            <ul className={cls.infoList}>
                <MovieInfoList movie={movie} />
            </ul>
        </div>
    )
}
