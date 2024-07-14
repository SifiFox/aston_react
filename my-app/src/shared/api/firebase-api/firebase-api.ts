import { MovieBase } from "@/app/hooks/use-movies/types"
import {
    auth,
    firestore,
    provider,
} from "@/shared/config/firebase-config/firebase-config"
import { message } from "antd"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth"
import {
    collection,
    onSnapshot,
    doc,
    getDoc,
    setDoc,
    updateDoc
} from "firebase/firestore"

export const checkAuth = (callback: (data) => void) => {
    onAuthStateChanged(auth, user => {
        callback(user)
        return user
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

export const getFavouritesByUser = async (userId) => {
    const userRef = doc(firestore, 'usersData', userId)
    const docSnap = await getDoc(userRef);
    const movies = docSnap.data().favourites.map(item => {return {kinopoiskId: item}})
    return {
        userId,
        movies
    }
}

export const setFavourites = async (movie: MovieBase) => {
    console.log('fb setFav')
    return true
}

export const isFavourite = (movie: MovieBase) => {
    checkAuth(async (user) => {
        if (user) {
            const { accessToken, auth } = user
            const { currentUser } = auth
            const { email, uid } = currentUser
            // await getFavouritesByUser(uid)
        }
    })
    // return true
}