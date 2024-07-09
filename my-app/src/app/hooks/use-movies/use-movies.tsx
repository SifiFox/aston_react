import { useEffect, useState } from "react";
import { getFullQuery } from "@/app/hooks/use-movies/helpers";
import { BASE_API_URL } from "@/app/api/api";
import type { Postfixes } from "@/app/hooks/use-movies/types";

export interface APIParams {
  id?: string,
  postfix?: Postfixes
}

export function useMovies(params: APIParams): unknown {
  const [movies, setMovies] = useState([]);

  const fullQuery = getFullQuery({
    base: `${BASE_API_URL}/films`,
    params: params
  });

  useEffect(() => {
    fetch(fullQuery, {
      method: "GET",
      headers: {
        "X-API-KEY": `${import.meta.env.VITE_API_KEY}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        setMovies(json);
      })
      .catch(err => console.log(err));
  }, [fullQuery]);

  return movies;
}
