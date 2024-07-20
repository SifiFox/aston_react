import React from "react"

interface UseWindowWidth {
    windowWidth: number
    isDesktop: boolean
}

export function useWindowWidth(): UseWindowWidth {
    const [windowWidth, setWindowWidth] = React.useState(0)

    React.useLayoutEffect(() => {
        const handler = () => {
            setWindowWidth(window.innerWidth)
        }

        handler()
        window.addEventListener("resize", handler)

        return () => {
            window.removeEventListener("resize", handler)
        }
    }, [])

    return {
        windowWidth,
        isDesktop: windowWidth > 860,
    }
}
