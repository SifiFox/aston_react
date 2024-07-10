// import { type Strings } from "@pages/ui/login-page/ui/login-form/login-form"
//
// import * as firebaseApi from "./firebase-api/firebase-api"
// import * as lsApi from "./ls-api/ls-api"
//
// export const checkAuth = callback => {
//     switch (import.meta.env.VITE_API_TYPE) {
//         case "firebase": {
//             return callback ? firebaseApi.checkAuth(callback) : null
//         }
//         case "ls": {
//             return lsApi.checkAuth()
//         }
//         default: {
//             throw new Error("API не подключено")
//         }
//     }
// }
//
// export const login = ({ email, password }) => {
//     switch (import.meta.env.VITE_API_TYPE) {
//         case "firebase": {
//             return firebaseApi.login({ email, password })
//         }
//         case "ls": {
//             return lsApi.login({ email, password })
//         }
//         default: {
//             throw new Error("API не подключено")
//         }
//     }
// }
//
// export const loginWithGoogle = () => {
//     switch (import.meta.env.VITE_API_TYPE) {
//         case "firebase": {
//             return firebaseApi.loginWithGoogle()
//         }
//         case "ls": {
//             return "Not supported feature"
//         }
//         default: {
//             throw new Error("API не подключено")
//         }
//     }
// }
//
// export const registration = (data: Strings) => {
//     const { email, password } = data
//     switch (import.meta.env.VITE_API_TYPE) {
//         case "firebase": {
//             return firebaseApi.registration({ email, password })
//         }
//         case "ls": {
//             return lsApi.registration({ email, password })
//         }
//         default: {
//             throw new Error("API не подключено")
//         }
//     }
// }
//
// export const logOut = () => {
//     switch (import.meta.env.VITE_API_TYPE) {
//         case "firebase": {
//             return firebaseApi.logout()
//         }
//         case "ls": {
//             return lsApi.logout()
//         }
//         default: {
//             throw new Error("API не подключено")
//         }
//     }
// }
