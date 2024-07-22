import { getFavouritesByUser } from "@/shared/api/api"
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks"
import { getUserSelector } from "@/shared/redux/store/selectors/user-selector"
import { setFavouritesStore } from "@/shared/redux/store/slices/favourites-slice"
import { useEffect, useState } from "react"

export const useFavourites = () => {
    const [favourites, setFavourites] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useAppSelector(getUserSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setIsLoading(true)
        const fetchUserFavourites = async () => {
            try {
                const userFavourites = await getFavouritesByUser(id)
                setFavourites(userFavourites)
                dispatch(setFavouritesStore(userFavourites.movies))
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUserFavourites()
    }, [dispatch, id])

    return {
        favourites,
        isLoading,
        error,
    }
}
