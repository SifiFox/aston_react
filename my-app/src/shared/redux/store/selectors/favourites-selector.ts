import { MovieBase } from "@/app/hooks/use-movies/types";
import { FavouritesState } from "@/shared/redux/store/slices/favourites-slice";
import { RootState } from "@/shared/redux/store/store";
import { createSelector } from "@reduxjs/toolkit";


export const getFavourites = (state: FavouritesState) => state.movies

export const makeGetIsMovieFavourite = () => {
    return createSelector(
        [getFavourites, (_: RootState, kinopoiskId: number) => kinopoiskId],
        (movies: MovieBase[], kinopoiskId: number) =>
            movies.some(movie => String(movie.kinopoiskId) === String(kinopoiskId)),
    );
};