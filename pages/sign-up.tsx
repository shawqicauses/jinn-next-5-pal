import Link from "next/link"
import {useRouter} from "next/router"
import React, {useContext, useState} from "react"
import {Auth} from "../stores/auth"

export default function SignUpPage() {
  const router = useRouter()
  const auth = useContext(Auth)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleInputNameOnChange = function handleInputNameOnChange(
    event: React.FormEvent<HTMLInputElement>
  ) {
    setName(event.currentTarget.value)
  }

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

  const handleInputPasswordConfirmationOnChange = function handleInputPasswordConfirmationOnChange(
    event: React.FormEvent<HTMLInputElement>
  ) {
    setPasswordConfirmation(event.currentTarget.value)
  }

  const handleFormOnSubmit = function handleFormOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (auth && name && email && password) {
      auth.signUp({name, email, password, password_confirmation: passwordConfirmation})
      router.push("/")
    }
  }

  return (
    <section className="my-10 py-10">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div className="my-flex flex-col">
          <h2 className="heading-2 mb-2.5 max-w-xl text-center">
            Sign up as a student in <span className="highlight">JINN</span>
          </h2>
          <p className="body mb-10 w-full max-w-xl text-center">
            Do you have an account?{" "}
            <Link
              href="/sign-in"
              className="my-transition font-medium text-gray-900 hover:text-blue-700">
              Sign in
            </Link>
          </p>
          <form className="my-flex max-w-md flex-col gap-3" onSubmit={handleFormOnSubmit}>
            <div className="my-flex flex-col !items-start gap-2">
              <label htmlFor="user-name" className="label">
                Name
              </label>
              <input
                id="user-name"
                type="text"
                name="user-name"
                placeholder="Shawqi Hatem"
                className="card-white label my-transition w-full border-gray-200 px-5 py-2.5 placeholder:font-normal placeholder:text-gray-500/50"
                onChange={handleInputNameOnChange}
              />
            </div>
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
            <div className="my-flex flex-col !items-start gap-2">
              <label htmlFor="user-password-confirmation" className="label">
                Password Confirmation
              </label>
              <input
                id="user-password-confirmation"
                type="password"
                name="user-password-confirmation"
                placeholder="••••••••••••"
                className="card-white label my-transition w-full border-gray-200 px-5 py-2.5 placeholder:font-normal placeholder:text-gray-500/50"
                onChange={handleInputPasswordConfirmationOnChange}
              />
            </div>
            <button type="submit" className="card-blue my-transition w-full border text-white">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
