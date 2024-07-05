import { Header } from "@/widgets/header";
import cls from "@/pages/ui/page.module.scss";
import { MoviesList } from "@/widgets/movies-list";
import { memo } from "react";
import { useMovies } from "@/app/hooks/use-movies/use-movies";

const MainPage = ({ title }) => {
  const { items, total } = useMovies({});

  return (<>
      <Header />
      <div className={cls.pageWrapper}>
        <h1 className={cls.pageTitle}>{title}</h1>
        <div className={cls.pageContent}>
          <div className={cls.totalMovies}>
            <h3>Total items: </h3>
            <p>{total}</p>
          </div>
          {
            items?.length > 0 && <MoviesList movies={items} />
          }
        </div>
      </div>
    </>
  );
};

export default memo(MainPage);