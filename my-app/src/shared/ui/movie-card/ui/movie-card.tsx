import { Card } from "antd";
import type { FC } from "react";
import cls from './movie-card.module.scss'
import { Link } from "react-router-dom";
import {type MovieBase} from "@/app/hooks/use-movies/types";
const { Meta } = Card;

interface MovieCardProps {
  movie: MovieBase
}

export const MovieCard: FC<MovieCardProps> = (props) => {
  const {movie} = props
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
  );
};