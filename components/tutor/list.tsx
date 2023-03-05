// Done Reviewing
import {tutors} from "../../data/tutors"
import TutorCardDetails from "./card-details"

export default function TutorList() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-2.5">
      {tutors.map((tutor) => (
        <TutorCardDetails
          image={tutor.image}
          name={tutor.name}
          bio={tutor.bio}
          description={tutor.description}
          speakingLanguage={tutor.speakingLanguage}
          teachingLanguage={tutor.teachingLanguage}
          isNative={tutor.isNative}
          isNewlyJoined={tutor.isNative}
          price={tutor.price}
        />
      ))}
    </div>
  )
}
