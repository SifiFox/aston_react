import type { AppDispatch, RootState } from "@/shared/redux/store/store"
import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from "react-redux"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
