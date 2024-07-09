export enum Postfixes {
  FACTS = "facts"
}

type Nullable<T> = T | null;

interface Country {
  country: string;
}

interface Genre {
  genre: string;
}

export interface MovieDetails {
  completed: boolean,
  countries: Country[],
  coverUrl: string | null,
  description: string | null,
  editorAnnotation: string | null,
  endYear: string | null,
  filmLength: number,
  genres: Genre[],
  has3D: boolean,
  hasImax: boolean,
  imdbId: string,
  isTicketsAvailable: false,
  kinopoiskHDId: number | null,
  kinopoiskId: number,
  lastSync: string,
  logoUrl: string | null,
  nameEn: string | null,
  nameOriginal: string,
  nameRu: string,
  posterUrl: string,
  posterUrlPreview: string,
  productionStatus: string | null,
  ratingAgeLimits: string,
  ratingAwait: string | null,
  ratingAwaitCount: number,
  ratingFilmCritics: string | null,
  ratingFilmCriticsVoteCount: number,
  ratingGoodReview: number,
  ratingGoodReviewVoteCount: number,
  ratingImdb: number,
  ratingImdbVoteCount: number,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  ratingMpaa: number | null,
  ratingRfCritics: number | null,
  ratingRfCriticsVoteCount: number,
  reviewsCount: number,
  serial: boolean,
  shortDescription: string | null,
  shortFilm: boolean,
  slogan: string | null,
  startYear: string | null,
  type: string,
  webUrl: string,
  year: number,
}

export interface MovieBase {
  countries: Country[],
  genres: Genre[],
  imdbId: Nullable<number>,
  kinopoiskId: number,
  nameEn: Nullable<string>,
  nameOriginal: string,
  nameRu: Nullable<string>,
  posterUrl: string,
  posterUrlPreview: string,
  ratingImdb: Nullable<number>,
  ratingKinopoisk: number,
  type: string,
  year: number,
}

export interface MoviesBase {
  total?: number
  totalPages?: number,
  items?: MovieBase[]
}

