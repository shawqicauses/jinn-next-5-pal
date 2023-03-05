// Done Reviewing
import {Tutor} from "../components"

export default function TutorsPage() {
  return (
    <div className="container mx-auto px-5 xl-2:max-w-xl-7">
      <div className="grid grid-cols-1 items-start gap-2.5 xl:grid-cols-4">
        <div className="card-gray-50 col-start-1 col-end-2 border-none p-5 xl:col-start-1 xl:col-end-4">
          <Tutor.TutorListTop />
          <div className="my-10 h-0.5 w-full bg-gray-100" />
          <Tutor.TutorList />
        </div>
        <div className="card-gray-50 flex items-start justify-start border-none">
          <iframe
            src="https://www.youtube.com/embed/KaLxCiilHns"
            title="Video Title Here"
            className="aspect-video w-full rounded-base"
          />
        </div>
      </div>
    </div>
  )
}
