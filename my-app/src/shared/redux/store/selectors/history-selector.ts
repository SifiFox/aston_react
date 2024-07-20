import { type HistoryState } from "@/shared/redux/store/slices/history-slice"
import {
    type RootState,
    createTypedDraftSafeSelector,
    selfSelect,
} from "@/shared/redux/store/store"

export const getHistorySelector = createTypedDraftSafeSelector(
    selfSelect,
    (state: RootState): HistoryState => state.history,
)
