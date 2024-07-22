import cls from "../movie.module.scss"

export const MoviePoster = ({ imageUrl, alt }) => {
    return (
        <div className={cls.poster}>
            <img src={imageUrl} alt={`${alt} poster`} />
        </div>
    )
}
