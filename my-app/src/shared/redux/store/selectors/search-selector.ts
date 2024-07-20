import { type SearchState } from "@/shared/redux/store/slices/search-slice"
import {
    createTypedDraftSafeSelector,
    selfSelect,
} from "@/shared/redux/store/store"
import { type RootState } from "@/shared/redux/store/store"

export const getSearchSelector = createTypedDraftSafeSelector(
    selfSelect,
    (state: RootState): SearchState => state.search,
)
