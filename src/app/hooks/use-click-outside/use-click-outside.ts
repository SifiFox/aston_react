import useEventListener from "@/app/hooks/use-event-listener/use-event-listener"

export const useClickOutside = (ref, cb) => {
    useEventListener(
        "click",
        e => {
            if (ref.current == null || ref.current.contains(e.target)) {
                return
            }

            cb(e)
        },
        document,
    )
}
