// Done Reviewing
import {courses, filters} from "../../data/courses"
import CourseCard from "./card"

interface ICourseList {
  filter: Boolean
}

export default function CourseList({filter}: ICourseList) {
  return (
    <div className="my-flex flex-col !items-start gap-5">
      {filter ? (
        <ul className="my-flex !w-max gap-2.5">
          {filters.map((item) => (
            <li key={item.name}>
              <button
                type="button"
                className={`button ${item.selected ? "button-primary" : "button-white"}`}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="grid-3 w-full">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            path={course.path}
            category={course.category}
            lessons={course.lessons}
            rating={course.rating}
          />
        ))}
      </div>
    </div>
  )
}
