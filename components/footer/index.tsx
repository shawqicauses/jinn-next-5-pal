// Done Reviewing
import Link from "next/link"
import {lists, listsBottom} from "../../data/footer"

export default function Footer() {
  return (
    <footer className="my-10 mb-0 bg-gray-700 py-10">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div className="grid-4 !gap-10">
          {lists.map((list) => (
            <div key={list.name} className="flex flex-col items-start justify-start gap-2.5">
              <h3 className="label-uppercase text-white md:text-base">{list.name}</h3>
              <ul className="flex flex-col items-start justify-start gap-0.5">
                {list.list.map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className="label font-normal text-gray-300">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="my-10 h-px w-full bg-gray-900/25" />
        <div className="grid-4">
          {listsBottom.map((list) => (
            <div key={list.name} className="flex flex-col items-start justify-start gap-2.5">
              <h3 className="label-uppercase text-white md:text-base">{list.name}</h3>
              <ul className="flex flex-col items-start justify-start gap-0.5">
                {list.list.map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className="label font-normal text-gray-300">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
