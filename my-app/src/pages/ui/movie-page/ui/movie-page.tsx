import { Header } from "@/widgets/header";
import cls from "@pages/ui/page.module.scss";
import { RoutePath } from "@/shared/config/route-config/route-config";
import type { FC} from "react";
import { memo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "@/app/hooks/use-movies/use-movies";
import { Movie } from "@/widgets/movie/ui/movie";
import type { MovieDetails } from "@/app/hooks/use-movies/types";

const MoviePage: FC = ({title}) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const movieInfo = useMovies({id:id});

  useEffect(() => {
    if (!movieInfo) {
      navigate(RoutePath.home);
    }
  }, [movieInfo, navigate]);

  return (
    <>

      <Header />
      <div className={cls.pageWrapper}>

        <h1 className={cls.pageTitle}>{title}</h1>
        <div className={cls.pageContent}>
          { movieInfo && <Movie movie={movieInfo as MovieDetails} />}
        </div>
      </div>
    </>
  );
};

export default memo(MoviePage);