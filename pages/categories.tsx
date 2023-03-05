// Done Reviewing
import {Fragment} from "react"
import {Category, Section} from "../components"

export default function CategoriesPage() {
  return (
    <Section
      title={
        <Fragment>
          Explore Our <br /> <span className="highlight">Popular</span> Categories
        </Fragment>
      }
      action={{text: "View Categories", path: "/categories"}}>
      <Category.CategoryList />
    </Section>
  )
}
