// Done Reviewing
import {ClipboardIcon} from "@heroicons/react/24/outline"
import {StarIcon} from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

interface ICourseCard {
  image: String
  path: String
  category: String
  lessons: Number
  rating: Number
}

export default function CourseCard({image, path, category, lessons, rating}: ICourseCard) {
  return (
    <Link
      href={path.toString()}
      className="my-transition my-flex card-white flex-col gap-2.5 hover:-translate-y-2.5">
      <div className="relative aspect-video w-full overflow-hidden rounded-base">
        <Image src={image.toString()} alt="Online Course" fill className="object-cover" />
        <p className="label-white card-blue absolute top-2.5 left-2.5 inline-block">{category}</p>
      </div>
      <div className="my-flex !justify-between px-5">
        <div className="flex items-center gap-0.5">
          <ClipboardIcon className="fill-none h-5 w-5 stroke-gray-500" />
          <p className="label">{lessons.toString()} Lesson</p>
        </div>
        <div className="flex items-center gap-0.5">
          <StarIcon className="stroke-none h-5 w-5 fill-yellow-300" />
          <p className="label">{rating.toString()} / 5.0</p>
        </div>
      </div>
    </Link>
  )
}
