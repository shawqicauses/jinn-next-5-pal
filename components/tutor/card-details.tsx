// Done Reviewing
import {AcademicCapIcon} from "@heroicons/react/24/outline"

interface ITutorCardDetails {
  image: String
  name: String
  bio: String
  description: String
  speakingLanguage: String
  teachingLanguage: String
  isNative: Boolean
  isNewlyJoined: Boolean
  price: Number
}

export default function TutorCardDetails({
  image,
  name,
  bio,
  description,
  speakingLanguage,
  teachingLanguage,
  isNative,
  isNewlyJoined,
  price
}: ITutorCardDetails) {
  return (
    <div className="my-flex card-white flex-col !items-start gap-5 lg:flex-row">
      <div
        className="aspect-video w-full shrink-0 basis-60 rounded-base bg-blue-700 lg:aspect-square lg:w-[initial]"
        style={{backgroundImage: `url(${image})`}}
      />
      <div className="flex flex-1 flex-col items-start justify-start">
        <h3 className="heading-3 mb-1">{name}</h3>
        <div className="my-flex label !w-max gap-1 text-gray-500">
          <AcademicCapIcon strokeWidth={1.5} className="h-5 w-5 stroke-current" />
          {teachingLanguage}
        </div>
        <div className="my-flex my-3 !w-max gap-3">
          <p className="label text-gray-500">Speaks: {speakingLanguage}</p>
          {isNative ? <div className="label card-teal text-teal-700">Native</div> : null}
        </div>
        <p className="body mb-3 font-medium text-slate-900 line-clamp-4">{bio}</p>
        <p className="body line-clamp-1">{description}</p>
        <button type="button" className="label mt-5 text-teal-500">
          Read More
        </button>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="my-flex mb-5 !w-max gap-5">
          {isNewlyJoined ? <div className="label card-teal text-teal-700">Newly Joined</div> : null}
          <div className="label my-flex !w-max flex-col gap-1 text-gray-500">
            <span className="heading-3 text-gray-900">{["$", price].join("")}</span>
            Per Hour
          </div>
        </div>
        <button type="button" className="button button-secondary mb-2 w-full">
          Book Trial Lesson
        </button>
        <button type="button" className="button button-tertiary mb-2 w-full">
          Message
        </button>
      </div>
    </div>
  )
}
