import { type MovieDetails } from "@/app/hooks/use-movies/types"
import { MovieInfoTitles } from "@/widgets/movie/ui/movie-info/types"
import cls from "@/widgets/movie/ui/movie.module.scss"

export const MovieInfoList = (props: { movie: MovieDetails }) => {
    const { movie } = props
    const rows = []

    for (const key in movie) {
        if (Object.getOwnPropertyDescriptor(movie, key)) {
            const title =
                MovieInfoTitles[
                    key.toUpperCase() as keyof typeof MovieInfoTitles
                ]
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

    return rows
}
