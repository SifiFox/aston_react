import { getFavouritesByUser } from "@/shared/api/api"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { useFetchAllMoviesQuery } from "@/shared/redux/store/services/movie-service"
import { setFavouritesStore } from "@/shared/redux/store/slices/favourites-slice"
import { useEffect, useState } from "react"

export const useFavourites = () => {
    const [favourites, setFavourites] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setIsLoading(true)
        getFavouritesByUser(id)
            .then(res => {
                setFavourites(res)
                dispatch(setFavouritesStore(res.movies))
            })
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }, [])

    return {
        favourites,
        isLoading,
        error,
    }
}
