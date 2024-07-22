import { MovieInfoTitles } from "./ui/movie-info/types"

export const isValidMovieInfoTitleKey = (
    key: string,
): key is keyof typeof MovieInfoTitles => {
    const upperCaseKey = key.toUpperCase()
    return upperCaseKey in MovieInfoTitles
}
