import {ReactNode, createContext, useEffect, useMemo, useState} from "react"
import axiosClient from "../plugins/axios"

interface ISignInData {
  email: String
  password: String
}

interface ISignUpData {
  name: String
  email: String
  password: String
  password_confirmation: String
}

interface IUser {
  token: String
  id: String
}

/* eslint no-unused-vars: off */
interface IAuth {
  user: IUser | null
  signIn: (data: ISignInData) => void
  signUp: (data: ISignUpData) => void
  signOut: () => void
  ready: Boolean
}

export const Auth = createContext({
  user: null,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
  ready: false
} as IAuth | null)

interface IAuthProvider {
  children: ReactNode
}

export const AuthProvider = function AuthProvider({children}: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const userStored = sessionStorage.getItem("USER")
      ? JSON.parse(JSON.stringify(sessionStorage.getItem("USER")))
      : null

    setUser(userStored)
  }, [])

  const signIn = function signIn(data: ISignInData) {
    axiosClient.post("/login", data).then((response) => {
      const userStored = {token: response.data.token, id: response.data.user.id}
      sessionStorage.setItem("USER", JSON.stringify(userStored))
      setUser(userStored)
    })
  }

  const signUp = function signUp(data: ISignUpData) {
    axiosClient.post("/register", data).then((response) => {
      const userStored = {token: response.data.token, id: response.data.user.id}
      sessionStorage.setItem("USER", JSON.stringify(userStored))
      setUser(userStored)
    })
  }

  const signOut = function signOut() {
    sessionStorage.removeItem("USER")
    setUser(null)
  }

  const value = useMemo(() => ({user, signIn, signUp, signOut} as IAuth), [user])
  return <Auth.Provider value={value}>{children}</Auth.Provider>
}
