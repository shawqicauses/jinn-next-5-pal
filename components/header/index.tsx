// Done Reviewing
import Image from "next/image"
import {achievements, options} from "../../data/header"

export default function Header() {
  return (
    <header className="mb-20">
      <div className="container mx-auto px-5 xl-2:max-w-xl-7">
        <div className="my-flex flex-col !items-start gap-10 xl:flex-row xl:!items-center">
          <div className="flex flex-1 flex-col items-start justify-start">
            <h1 className="heading-1 mb-10 max-w-xl capitalize lg:max-w-xl-2">
              {/* eslint-disable-next-line */}
              Start facing world's languages with{" "}
              <span className="highlight">our online course</span> by best tutors around you.
            </h1>
            <div className="mb-5 flex w-full flex-col items-stretch gap-2.5 sm:flex-row">
              <input
                id="website-search"
                type="search"
                name="website-search"
                placeholder="Search by language or specialty"
                className="card-white label my-transition w-full border-gray-200 px-5 py-2.5 placeholder:font-normal placeholder:text-gray-500/50"
              />
              <button type="button" className="button button-primary whitespace-nowrap">
                Explore Tutors
              </button>
            </div>
            <ul className="flex w-full flex-col items-center gap-2.5 sm:gap-5 md:flex-row md:gap-10">
              {options.map((option) => (
                <li key={option.name}>
                  <a
                    href={option.path}
                    className="label-uppercase my-transition inline-block hover:text-blue-700">
                    {option.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 mix-blend-darken">
            <Image
              src="/hero.jpg"
              alt="Hero Image"
              fill
              className="!relative !inset-auto grayscale"
            />
          </div>
        </div>
        <ul className="grid-4 card-white !gap-10 p-10">
          {achievements.map((achievement) => (
            <li key={achievement.name} className="my-flex flex-col gap-2.5">
              <span className="heading-3 text-blue-700 lg:text-xl xl:text-xl-2">
                {achievement.value}
              </span>
              <p className="label-uppercase">{achievement.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
