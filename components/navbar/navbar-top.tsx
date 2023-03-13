// Done Reviewing
import {FolderOpenIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import {useRouter} from "next/router"
import {useContext} from "react"
import {actions, languages} from "../../data/navigation"
import {Auth} from "../../stores/auth"

export default function NavbarTop() {
  const auth = useContext(Auth)
  const router = useRouter()

  return (
    <div className="my-flex bg-gray-50 p-4">
      {auth?.user ? (
        <div className="my-flex !justify-end gap-5">
          <div className="my-flex !hidden !w-max gap-5 lg:!flex">
            <div className="my-flex">
              <FolderOpenIcon strokeWidth={1.5} className="h-6 w-6 stroke-gray-500" />
              <p className="label ml-2 mr-5 whitespace-nowrap">Balance: 0 Hours</p>
              <button type="button" className="button button-primary whitespace-nowrap">
                Buy Hours
              </button>
            </div>
            <button type="button" className="button button-white whitespace-nowrap">
              Refer a Friend
            </button>
            <select
              defaultValue="en"
              className="label-lg card-white h-11 w-full truncate p-0 px-3 leading-normal">
              {languages.map((language) => (
                <option key={language.value} value={language.value}>
                  {language.name}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden h-5 w-0.5 bg-gray-200 lg:block" />
          <ul className="my-flex !w-max gap-1.5">
            {actions.map((action, index) => (
              // eslint-disable-next-line
              <li key={`S-${index}`}>
                <button type="button" className="my-flex h-10 !w-10 rounded-full">
                  {action.icon}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-label="User Menu"
                className="my-flex ml-3 h-10 !w-10 rounded-full bg-blue-700"
                onClick={() => {
                  auth.signOut()
                  router.push("/sign-in")
                }}
              />
            </li>
          </ul>
        </div>
      ) : (
        <div className="my-flex !justify-end gap-5">
          <div className="my-flex !hidden !w-max gap-2.5 lg:!flex">
            <Link href="/sign-up" className="button button-white whitespace-nowrap">
              Sign up
            </Link>
            <Link href="/sign-in" className="button button-primary whitespace-nowrap">
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
