import { MovieCard } from "@/shared/ui/movie-card";
import cls from './movies-list.module.scss'

export const MoviesList = (props: { movies }) => {
  const {movies} = props
  return (
    <div className={cls.moviesList}>
      {
        movies.map((item, index) => {
          return <MovieCard movie={item} key={index}/>
        })
      }
    </div>
  )
}
