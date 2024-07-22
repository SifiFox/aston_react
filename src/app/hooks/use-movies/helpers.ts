import type { APIParams } from "@/app/hooks/use-movies/use-movies"

interface getFullQueryParams {
    base: string
    params: APIParams
}

export const getFullQuery = ({ base, params }: getFullQueryParams): string => {
    const additional = Object.values(params).join("/")
    return additional ? `${base}/${additional}` : base
}
