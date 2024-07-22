import App from "@/app/App"
import "@/app/styles/index.scss"
import "@/shared/config/firebase-config/firebase-config"
import "antd/dist/reset.css"
import React from "react"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")

if (container) {
    const root = createRoot(container)

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}