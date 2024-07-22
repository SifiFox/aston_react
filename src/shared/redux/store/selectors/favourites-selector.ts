import type { MovieBase } from "@/app/hooks/use-movies/types"
import type { FavouritesState } from "@/shared/redux/store/slices/favourites-slice"
import type { RootState } from "@/shared/redux/store/store"
import {
    createTypedDraftSafeSelector,
    selfSelect,
} from "@/shared/redux/store/store"
import { createSelector } from "@reduxjs/toolkit"

export const getFavourites = (state: FavouritesState) => state.movies

export const getFavouritesSelector = createTypedDraftSafeSelector(
    selfSelect,
    (state: RootState): FavouritesState => state.favourites,
)

export const makeGetIsMovieFavourite = () => {
    return createSelector(
        [
            getFavourites,
            (_: FavouritesState, kinopoiskId: number) => kinopoiskId,
        ],
        (movies: MovieBase[], kinopoiskId: number) =>
            movies?.some(
                movie => String(movie.kinopoiskId) === String(kinopoiskId),
            ),
    )
}
