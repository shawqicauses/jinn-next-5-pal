// Done Reviewing
import {categories} from "../../data/categories"
import CategoryItem from "./item"

export default function CategoryList() {
  return (
    <ul className="grid-3">
      {categories.map((category) => (
        <CategoryItem
          key={category.name}
          name={category.name}
          description={category.description}
          path={category.path}
          icon={category.icon}
        />
      ))}
    </ul>
  )
}
