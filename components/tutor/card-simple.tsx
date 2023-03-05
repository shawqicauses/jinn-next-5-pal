// Done Reviewing
import {ShieldCheckIcon, StarIcon} from "@heroicons/react/24/solid"
import Image from "next/image"

interface ITutorCardSimple {
  name: String
  description: String
  flag: String
  price: Number
  ratingAverage: Number
  ratingQuantity: Number
}

export default function TutorCardSimple({
  name,
  description,
  flag,
  price,
  ratingAverage,
  ratingQuantity
}: ITutorCardSimple) {
  return (
    <div className="card-white flex flex-col items-start justify-start overflow-hidden">
      <div className="mb-2.5 aspect-video w-full rounded-base bg-blue-700" />
      <div className="flex flex-col items-start justify-start gap-2 p-2.5">
        <div className="flex items-center justify-start gap-1">
          <h3 className="heading-3">{name}</h3>
          <Image
            src={flag.toString()}
            alt={name.toString()}
            fill
            className="!relative !inset-auto !h-[initial] !w-5 rounded-sm"
          />
          <ShieldCheckIcon width={20} height={20} className="fill-cyan-500" />
        </div>
        <div className="flex items-center justify-start gap-2">
          <p className="label">{["$", price].join("")} / Hour</p>
          <div className="flex items-center justify-start gap-1">
            <StarIcon width={20} height={20} className="fill-yellow-300" />
            <p className="label">{ratingAverage.toString()}</p>
            <p className="label">({ratingQuantity.toString()})</p>
          </div>
        </div>
        <p className="body text-sm line-clamp-3">{description}</p>
        <button type="button" className="label mt-5 text-teal-500">
          View Full Profile
        </button>
      </div>
    </div>
  )
}
