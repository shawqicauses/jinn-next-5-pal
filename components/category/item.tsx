// Done Reviewing
import Link from "next/link"
import {ReactNode} from "react"

interface ICategoryItem {
  name: String
  description: String
  path: String
  icon: ReactNode
}

export default function CategoryItem({name, description, path, icon}: ICategoryItem) {
  return (
    <li className="my-flex">
      <Link
        href={path.toString()}
        className="my-flex my-transition card-white group gap-5 p-5 hover:border-blue-900 hover:bg-blue-900">
        <div className="my-flex !w-max text-blue-700 group-hover:text-white">{icon}</div>
        <div className="flex flex-1 flex-col items-start justify-center truncate">
          <h3 className="my-transition heading-3 mb-1.5 group-hover:text-white">{name}</h3>
          <p className="my-transition body-inline leading-tight group-hover:text-gray-300">
            {description}
          </p>
        </div>
      </Link>
    </li>
  )
}
