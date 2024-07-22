import { type UserState } from "@/shared/redux/store/slices/user-slice"
import {
    createTypedDraftSafeSelector,
    selfSelect,
} from "@/shared/redux/store/store"
import { type RootState } from "@/shared/redux/store/store"

export const getUserSelector = createTypedDraftSafeSelector(
    selfSelect,
    (state: RootState): UserState => state.user,
)
