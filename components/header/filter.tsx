// Done Reviewing
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
import {filtersBottom, filtersTop} from "../../data/header"

export default function HeaderFilter() {
  return (
    <div className="mb-10">
      <div className="container mx-auto flex flex-col gap-10 px-5 xl-2:max-w-xl-7">
        <div className="grid-4 card-white items-center !gap-7 py-7 px-5 md:!gap-5">
          {filtersTop.map((filter) => (
            <div key={filter.id} className="flex flex-1 flex-col items-start">
              <label htmlFor={filter.id} className="label-uppercase mb-2.5">
                {filter.name}
              </label>
              <select
                id={filter.id}
                defaultValue={filter.options[0].value}
                className="label-lg w-full border-none p-0 leading-normal">
                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-stretch justify-between gap-2.5 lg:flex-row">
          <div className="flex flex-1 flex-col items-stretch justify-end gap-2.5 lg:flex-row">
            {filtersBottom.map((filter) => (
              <select
                key={filter.id}
                id={filter.id}
                defaultValue={filter.options[0].value}
                className="label-lg card-gray-50 h-11 w-full truncate p-0 px-3 leading-normal">
                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2.5 lg:w-max lg:flex-row">
            <div className="card-gray-50 flex w-full items-center overflow-hidden p-0 pr-3 lg:w-max">
              <input
                id="search"
                type="search"
                name="search"
                placeholder="Search by name or keyword"
                className="label-lg h-10 w-full border-none bg-transparent leading-normal placeholder:font-normal placeholder:text-gray-500"
              />
              <label htmlFor="search" className="my-flex !w-max">
                <MagnifyingGlassIcon strokeWidth={1.5} className="h-4 w-4 stroke-gray-500" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
