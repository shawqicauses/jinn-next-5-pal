// Done Reviewing
import {Fragment} from "react"
import {Course, Section} from "../components"

export default function CoursesPage() {
  return (
    <Section
      title={
        <Fragment>
          Group Classes <br /> Join Our Most <span className="highlight">Popular</span> Classes
        </Fragment>
      }
      action={{text: "View Courses", path: "/courses"}}>
      <Course.CourseList filter />
    </Section>
  )
}
