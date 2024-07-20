import { type MovieBase } from "@/app/hooks/use-movies/types"
import { Card } from "antd"
import { Link } from "react-router-dom"

export const ResultList = ({ movies }: { movies: MovieBase[] }) => {
    return (
        <>
            {movies.map(movie => {
                return (
                    <Link key={movie.kinopoiskId} to={`/${movie.kinopoiskId}`}>
                        <Card
                            style={{
                                height: 440,
                                width: 200,
                                overflow: "hidden",
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={movie.posterUrlPreview}
                                />
                            }
                        >
                            <p>{movie.nameOriginal}</p>
                        </Card>
                    </Link>
                )
            })}
        </>
    )
}
