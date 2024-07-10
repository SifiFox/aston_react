import { auth, provider } from "@/shared/config/firebase-config/firebase-config"
import { message } from "antd"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth"

export const checkAuth = (callback: (data) => void) => {
    onAuthStateChanged(auth, user => {
        callback(user)
    })
}

export const login = async ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            const { email, uid, accessToken } = res.user
            message.success("Успех!")
            return { email, uid, accessToken }
        })
        .catch(() => {
            message.error("Произошла ошибка, попробуйте заново")
            return new Error("Произошла ошибка, попробуйте заново")
        })
}

export const loginWithGoogle = async () => {
    return signInWithPopup(auth, provider)
}

export const registration = async ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password).then(res => {
        return res.user
    })
    return true
}

export const logout = () => signOut(auth)
