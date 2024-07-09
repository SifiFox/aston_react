import * as firebaseApi from './firebase-api/firebase-api'
import * as lsApi from './ls-api/ls-api'


export const checkAuth = (callback) => {
    switch (import.meta.env.VITE_API_TYPE) {
        case 'firebase': {
            return firebaseApi.checkAuth(callback)
        }
        case 'ls': {
            return 'check auth ls'
        }
        default: {
            throw new Error('API не подключено')
        }
    }
}

export const login = ({email, password}) => {
    switch (import.meta.env.VITE_API_TYPE) {
        case 'firebase': {
            return firebaseApi.login({email, password})
        }
        case 'ls': {
            lsApi.login()
            break;
        }
        default: {
            throw new Error('API не подключено')
        }
    }
}


export const loginWithGoogle = () => {
    switch (import.meta.env.VITE_API_TYPE) {
        case 'firebase': {
            return firebaseApi.loginWithGoogle()
        }
        case 'ls': {
            return 'Not supported feature'
        }
        default: {
            throw new Error('API не подключено')
        }
    }
}


export const registration = ({email, password}) => {
    switch (import.meta.env.VITE_API_TYPE) {
        case 'firebase': {
            return firebaseApi.registration({email, password})
        }
        case 'ls': {
            lsApi.login()
            break;
        }
        default: {
            throw new Error('API не подключено')
        }
    }
}


export const logOut = () => {
    switch (import.meta.env.VITE_API_TYPE) {
        case 'firebase': {
            return firebaseApi.logout()
        }
        case 'ls': {
            return 'ls logout'
        }
        default: {
            throw new Error('API не подключено')
        }
    }
}