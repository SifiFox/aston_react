import {firebaseData, LoginParams} from "@/app/api/types"
import type { MovieBase } from "@/app/hooks/use-movies/types"
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
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore"



const querySnapshot = await getDocs(collection(firestore, "usersData"))

export const checkAuth = (callback: (data) => void) => {
    onAuthStateChanged(auth, user => {
        callback(user)
        return user
    })
}

export const loginWithGoogle = async () => {
    return signInWithPopup(auth, provider)
}

export const login = async ({ email, password }: LoginParams) => {
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

export const registration = async ({ email, password }: LoginParams) => {
    createUserWithEmailAndPassword(auth, email, password).then(res => {
        return res.user
    })
}

export const logout = () => signOut(auth)

export const getFavouritesByUser = async (userId: number | string) => {
    const data: firebaseData[] = []
    querySnapshot.forEach(doc => {
        data.push(<firebaseData>doc.data())
    })
    const filteredData = data.find(
        item => String(item.userId) === String(userId),
    )

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

export const getHistoryByUser = async (userId: number | string) => {
    const data: firebaseData[] = []
    querySnapshot.forEach(doc => {
        data.push(<firebaseData>doc.data())
    })
    const filteredData = data.find(
        item => String(item.userId) === String(userId),
    )

    return filteredData
        ? {
              userId: filteredData.userId,
              history: filteredData.history.map(item => {
                  return {
                      request: item,
                  }
              }),
          }
        : null
}

export const setFavourites = async (movie: MovieBase) => {
    const data: firebaseData[] = []

    querySnapshot.forEach(doc => {
        data.push(<firebaseData>doc.data())
    })

    const { kinopoiskId } = movie
    const userData = data.find(
        item => String(item.userId) === String(auth.currentUser.uid),
    )
    const isMovieFavourite = userData.favourites.includes(String(kinopoiskId))

    if (isMovieFavourite) {
        userData.favourites.splice(
            userData.favourites.indexOf(String(kinopoiskId)),
            1,
        )
    } else {
        userData.favourites.push(String(kinopoiskId))
    }

    const docRef = doc(firestore, "usersData", auth.currentUser.uid)
    await updateDoc(docRef, userData)
}

export const setHistory = async (request: string) => {
    const data: firebaseData[] = []

    querySnapshot.forEach(doc => {
        data.push(<firebaseData>doc.data())
    })

    const userData = data.find(
        item => String(item.userId) === String(auth.currentUser.uid),
    )

    if (!userData) {
        const newUserData: firebaseData = {
            userId: auth.currentUser.uid,
            favourites: [],
            history: [request],
        }
        const docRef = doc(firestore, "usersData", auth.currentUser.uid)
        await setDoc(docRef, newUserData)
    } else {
        const isRequestInHistory = userData.history.includes(String(request))

        if (!isRequestInHistory) {
            userData.history.push(String(request))
        }

        const docRef = doc(firestore, "usersData", auth.currentUser.uid)
        await updateDoc(docRef, userData)
    }
}

export const removeFromHistory = async (request: string) => {
    const data: firebaseData[] = []

    querySnapshot.forEach(doc => {
        data.push(<firebaseData>doc.data())
    })

    const userData = data.find(
        item => String(item.userId) === String(auth.currentUser.uid),
    )

    userData.history.splice(userData.history.indexOf(String(request)), 1)

    const docRef = doc(firestore, "usersData", auth.currentUser.uid)
    await updateDoc(docRef, userData)
}

export const clearHistory = async () => {
    const data: firebaseData[] = []

    querySnapshot.forEach(doc => {
        data.push(<firebaseData>doc.data())
    })

    const userData = data.find(
        item => String(item.userId) === String(auth.currentUser.uid),
    )

    userData.history = []

    const docRef = doc(firestore, "usersData", auth.currentUser.uid)
    await updateDoc(docRef, userData)
}