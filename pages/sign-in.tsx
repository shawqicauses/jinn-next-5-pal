import Link from "next/link"
import {useRouter} from "next/router"
import React, {useContext, useState} from "react"
import {Auth} from "../stores/auth"

export default function SignInPage() {
  const router = useRouter()
  const auth = useContext(Auth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInputEmailOnChange = function handleInputEmailOnChange(
    event: React.FormEvent<HTMLInputElement>
  ) {
    setEmail(event.currentTarget.value)
  }

  const handleInputPasswordOnChange = function handleInputPasswordOnChange(
    event: React.FormEvent<HTMLInputElement>
  ) {
    setPassword(event.currentTarget.value)
  }

  const handleFormOnSubmit = function handleFormOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (auth && email && password) {
      auth.signIn({email, password})
      router.push("/")
    }
  }

  return (
    <section className="my-10 py-10">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div className="my-flex flex-col">
          <h2 className="heading-2 mb-2.5 max-w-xl text-center">
            Sign in <span className="highlight">JINN</span> education
          </h2>
          <p className="body mb-10 w-full max-w-xl text-center">
            <Link
              href="/sign-up/student"
              className="my-transition font-medium text-gray-900 hover:text-blue-700">
              Sign up as tutor
            </Link>{" "}
            or{" "}
            <Link
              href="/sign-up/student"
              className="my-transition font-medium text-gray-900 hover:text-blue-700">
              sign up as a student
            </Link>
          </p>
          <form className="my-flex max-w-md flex-col gap-3" onSubmit={handleFormOnSubmit}>
            <div className="my-flex flex-col !items-start gap-2">
              <label htmlFor="user-email" className="label">
                Email
              </label>
              <input
                id="user-email"
                type="email"
                name="user-email"
                placeholder="me@example.com"
                className="card-white label my-transition w-full border-gray-200 px-5 py-2.5 placeholder:font-normal placeholder:text-gray-500/50"
                onChange={handleInputEmailOnChange}
              />
            </div>
            <div className="my-flex flex-col !items-start gap-2">
              <label htmlFor="user-password" className="label">
                Password
              </label>
              <input
                id="user-password"
                type="password"
                name="user-password"
                placeholder="••••••••••••"
                className="card-white label my-transition w-full border-gray-200 px-5 py-2.5 placeholder:font-normal placeholder:text-gray-500/50"
                onChange={handleInputPasswordOnChange}
              />
            </div>
            <button type="submit" className="card-blue my-transition w-full border text-white">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
