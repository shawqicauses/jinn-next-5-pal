// Done Reviewing
import {ChevronRightIcon} from "@heroicons/react/24/solid"
import Link from "next/link"
import {ReactNode} from "react"

interface ISectionTitle {
  title: String | ReactNode
  action: {
    text: String
    path: String
  }
}

export const SectionTitle = function SectionTitle({title, action}: ISectionTitle) {
  return (
    <div className="mb-10 flex w-full flex-wrap items-center justify-between gap-5 md:gap-10">
      <h2 className="heading-2">{title}</h2>
      <Link
        href={action.path.toString()}
        type="button"
        className="my-flex label-uppercase my-transition !w-max gap-5 hover:text-blue-700">
        {action.text} <ChevronRightIcon className="fill-none h-4 w-4 stroke-current" />
      </Link>
    </div>
  )
}

interface ISection extends ISectionTitle {
  children: ReactNode
}

export default function Section({children, title, action}: ISection) {
  return (
    <section className="mb-10 pb-10">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div className="card-white p-5">
          <SectionTitle title={title} action={action} />
          {children}
        </div>
      </div>
    </section>
  )
}
