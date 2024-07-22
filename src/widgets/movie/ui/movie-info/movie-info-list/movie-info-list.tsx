import { type MovieDetails } from "@/app/hooks/use-movies/types"
import { isValidMovieInfoTitleKey } from "@/widgets/movie/helpers"
import { MovieInfoTitles } from "@/widgets/movie/ui/movie-info/types"
import cls from "@/widgets/movie/ui/movie.module.scss"

export const MovieInfoList = (props: { movie: MovieDetails }) => {
    const { movie } = props
    const rows = []

    for (const key in movie) {
        // TODO: Но как будто через as было сильно лаконичнее
        if (Object.prototype.hasOwnProperty.call(movie, key)) {
            const upperCaseKey = key.toUpperCase()
            if (isValidMovieInfoTitleKey(upperCaseKey)) {
                const title = MovieInfoTitles[upperCaseKey]
                if (title && movie[key]) {
                    rows.push(
                        <li className={cls.infoItem} key={key}>
                            <span>{title}</span>
                            <span>{movie[key]}</span>
                        </li>,
                    )
                }
            }
        }
    }

    return rows
}
