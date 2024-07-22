import { useFavourites } from "@/features/favourites/hooks/use-favourites"
import cls from "@/pages/ui/page.module.scss"
import { useAppSelector } from "@/shared/redux/hooks"
import { getFavouritesSelector } from "@/shared/redux/store/selectors/favourites-selector"
import { ErrorFallback } from "@/shared/ui/error-fallback"
import { Header } from "@/widgets/header"
import { MoviesContent } from "@/widgets/movies-content"
import { SearchComponent } from "@/widgets/search"
import { type PageProps } from "@pages/types/types"
import { ErrorBoundary } from "react-error-boundary"

const FavouritesPage = ({ title }: PageProps) => {
    const { movies: userFavourites } = useAppSelector(getFavouritesSelector)
    useFavourites()

    if (userFavourites) {
        return (
            <>
                <Header />
                <div className={cls.pageWrapper}>
                    <h1 className={cls.pageTitle}>{title}</h1>
                    <div className={cls.pageContent}>
                        <SearchComponent />
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <MoviesContent
                                movies={userFavourites}
                                moviesCount={userFavourites.length}
                                isError={!userFavourites}
                            />
                        </ErrorBoundary>
                    </div>
                </div>
            </>
        )
    }
}

export default FavouritesPage
