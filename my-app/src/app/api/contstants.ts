import {
    apiFunctions,
    ApiTypes
} from "@/app/api/types"
import * as firebaseApi from "@/shared/api/firebase-api/firebase-api"
import * as lsApi from "@/shared/api/ls-api/ls-api"


const apiType: ApiTypes = import.meta.env.VITE_API_TYPE as ApiTypes

const apis: Record<ApiTypes, apiFunctions>= {
    [ApiTypes.LOCALSTORAGE]: lsApi,
    [ApiTypes.FIREBASE]: firebaseApi,
}

export const api = apis[apiType]