// Done Reviewing
import Image from "next/image"
import {Fragment} from "react"
import {tutorsTop} from "../../data/tutors"
import {TutorCardSimple} from "./index"

export default function TutorListTop() {
  return (
    <Fragment>
      <div className="mb-8">
        <h2 className="label flex flex-col justify-start gap-2 text-gray-500 sm:flex-row">
          Top 3 tutors for students from
          <div className="my-flex !w-max flex-row gap-2">
            <Image
              src="/ps.svg"
              alt="PS Flag"
              fill
              className="!relative !inset-auto !h-[initial] !w-5 rounded-sm"
            />
            <span className="font-semi-bold text-gray-700">Palestine, State Of</span>
          </div>
        </h2>
      </div>
      <div className="grid-3">
        {tutorsTop.map((tutor) => (
          <TutorCardSimple
            key={tutor.id}
            name={tutor.name}
            description={tutor.description}
            flag={tutor.flag}
            price={tutor.price}
            ratingAverage={tutor.ratingAverage}
            ratingQuantity={tutor.ratingQuantity}
          />
        ))}
      </div>
    </Fragment>
  )
}
