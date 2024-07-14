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
import { collection, doc, getDocs, updateDoc } from "firebase/firestore"

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

export const getFavouritesByUser = async userId => {
    const querySnapshot = await getDocs(collection(firestore, "usersData"))
    const data = []
    querySnapshot.forEach(doc => {
        data.push(doc.data())
    })
    const filteredData = data.find(item => item.userId === userId)

    return filteredData
        ? {
              userId: filteredData.userId,
              movies: filteredData.favourites.map(item => {
                  return {
                      kinopoiskId: item,
                  }
              }),
          }
        : null
}

export const setFavourites = async (movie: MovieBase) => {
    const querySnapshot = await getDocs(collection(firestore, "usersData"))
    const data = []
    querySnapshot.forEach(doc => {
        data.push(doc.data())
    })
    const { kinopoiskId } = movie
    const userData = data.find(
        item => String(item.userId) === String(auth.currentUser.uid),
    )
    const isMovieFavourite = userData.favourites.includes(String(kinopoiskId))
    if (isMovieFavourite) {
        userData.favourites.splice(userData.favourites.indexOf(String(kinopoiskId)), 1)
    } else {
        userData.favourites.push(String(kinopoiskId))
    }
    const docRef = doc(firestore, "usersData", auth.currentUser.uid)
    await updateDoc(docRef, userData)
}