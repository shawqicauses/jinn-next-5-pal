// Done Reviewing
import {MagnifyingGlassIcon, Squares2X2Icon} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import {navigation} from "../../data/navigation"
import NavbarTop from "./navbar-top"

export default function Navbar() {
  return (
    <div className="my-flex mb-5 flex-col gap-5">
      <NavbarTop />
      <nav className="my-flex">
        <div className="my-flex container mx-auto gap-5 px-5 xl-2:max-w-xl-7">
          <Image src="/logo.png" alt="Logo" fill className="!relative !inset-auto !h-20 !w-max" />
          <div className="hidden w-full flex-1 items-center justify-end gap-10 sm:flex sm:justify-between">
            <button type="button" className="label-uppercase my-flex !w-max gap-2.5">
              <Squares2X2Icon strokeWidth={1.5} className="h-6 w-6 stroke-current" />
              Category
            </button>
            <ul className="my-flex !hidden gap-10 xl:!flex">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${item.path}`}
                    className="label-uppercase my-transition hover:text-blue-700">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="button button-lg button-white flex items-center gap-5 whitespace-nowrap">
              <MagnifyingGlassIcon strokeWidth={1.5} className="h-6 w-6 stroke-gray-300" />
              Find Tutors
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
