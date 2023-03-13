// Done Reviewing
import {ExclamationCircleIcon} from "@heroicons/react/24/outline"
import {ChevronRightIcon} from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import {Fragment, useContext} from "react"
import {Category, Course, Header, HeaderFilter, Section} from "../components"
import {events, features} from "../data/home"
import {Auth} from "../stores/auth"

// Done Reviewing
export const TutorWithJINN = function TutorWithJINN() {
  return (
    <section className="mb-10 pb-10">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div className="card-white my-flex flex-col !items-stretch gap-5 p-5 xl:flex-row">
          <div className="flex-1 p-2.5">
            <h2 className="heading-2 mb-2.5">
              Tutor With <span className="highlight">JINN</span>
            </h2>
            <p className="body mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quibusdam, laboriosam
              voluptatibus magnam ipsum aut animi! Facere reiciendis facilis saepe nisi harum et id
              inventore corporis tempora incidunt, maiores labore!
            </p>
            <ul className="mb-20 flex flex-col items-start gap-2.5">
              {features.map((item) => (
                <li key={item.name} className="my-flex !w-max gap-2.5">
                  {item.icon}
                  <p className="label">{item.name}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center justify-start gap-2.5 sm:!w-max sm:flex-row">
              <button
                type="button"
                className="button button-primary h-12 w-full whitespace-nowrap sm:w-max">
                Become a Tutor
              </button>
              <button
                type="button"
                className="button button-white flex h-12 w-full items-center justify-center gap-2.5 text-gray-900 sm:w-max">
                <ExclamationCircleIcon strokeWidth={1.5} className="h-6 w-6 stroke-gray-300" />
                Find Tutors
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/courses.jpg"
              alt="Something Special"
              fill
              className="!relative !inset-auto aspect-video rounded-base object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Done Reviewing
export const LearnWithJINN = function LearnWithJINN() {
  return (
    <section className="mb-10 pb-10">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div className="card-white my-flex flex-col gap-5 p-5">
          <div className="w-full flex-1">
            <Image
              src="/courses.jpg"
              alt="Something Special"
              fill
              className="!relative !inset-auto !h-80 rounded-base object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-start p-2.5">
            <h2 className="heading-2 mb-2.5 max-w-xl text-center">
              Hundreds Of Thousands <span className="highlight">Students</span> Join Us Monthly
            </h2>
            <p className="body mb-5 max-w-xl-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quibusdam, laboriosam
              voluptatibus magnam ipsum aut animi! Facere reiciendis facilis saepe nisi harum et id
              inventore corporis tempora incidunt!
            </p>
            <button type="button" className="button button-primary h-12 w-full sm:w-max">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function IndexPage() {
  const auth = useContext(Auth)
  return (
    <Fragment>
      <Header />
      <HeaderFilter />
      <Section
        title={
          <Fragment>
            Explore Our <br /> <span className="highlight">Popular</span> Categories
          </Fragment>
        }
        action={{text: "View Categories", path: "/categories"}}>
        <Category.CategoryList />
      </Section>
      <Section
        title={
          <Fragment>
            Group Classes <br /> Join Our Most <span className="highlight">Popular</span> Classes
          </Fragment>
        }
        action={{text: "View Courses", path: "/courses"}}>
        <Course.CourseList filter={false} />
      </Section>
      <Section
        title={
          <Fragment>
            Our Current List Of <br /> <span className="highlight">Events</span> Specially For You
          </Fragment>
        }
        action={{text: "View Events", path: "/"}}>
        <ul className="my-flex flex-col gap-2.5">
          {events.map((event) => (
            <li
              key={event.name}
              className="card-gray-50 my-transition flex w-full flex-wrap items-center justify-between gap-10 p-5 hover:border-blue-700">
              <div className="flex flex-col gap-2.5">
                <p className="label">
                  {event.date} | {event.time.to} - {event.time.from} | {event.location}
                </p>
                <h3 className="heading-3">{event.name}</h3>
              </div>
              <Link
                href={event.path}
                className="label-uppercase my-transition flex items-center gap-2.5 whitespace-nowrap hover:text-blue-700">
                View More <ChevronRightIcon className="stroke-none h-5 w-5 fill-current" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      {!auth?.user ? (
        <Fragment>
          <TutorWithJINN />
          <LearnWithJINN />
        </Fragment>
      ) : null}
    </Fragment>
  )
}
