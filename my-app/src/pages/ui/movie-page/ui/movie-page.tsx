import {Header} from "@/widgets/header";
import cls from "@pages/ui/page.module.scss";
import {memo} from "react";
import {useParams} from "react-router-dom";
import {useMovies} from "@/app/hooks/use-movies/use-movies";
import {Movie} from "@/widgets/movie/ui/movie";
import type {MovieDetails} from "@/app/hooks/use-movies/types";

const MoviePage = ({title}) => {
    const {id} = useParams();
    const movieInfo = useMovies({id: id});

    return (
        <>
            <Header/>
            <div className={cls.pageWrapper}>
                <h1 className={cls.pageTitle}>{title}</h1>
                <div className={cls.pageContent}>
                    {movieInfo && <Movie movie={movieInfo as MovieDetails}/>}
                </div>
            </div>
        </>
    );
};

export default memo(MoviePage);