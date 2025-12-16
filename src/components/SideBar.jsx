import { FaListUl } from "react-icons/fa";
import { createQuery } from "../helper/helper";
import styles from "./SideBar.module.css";
import { categories } from "../const/const";

function SideBar({ query, setQuery }) {
  const CategoryHandler = (event) => {
    const { tagName } = event.target;
    console.log(tagName);
    const category =event.target.innerText.toLowerCase().trim();
    if (tagName !== "LI") return;
    console.log(category);

    setQuery((query) => createQuery(query, {category}));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>

      <ul onClick={CategoryHandler}>
        {categories.map((item) => (
          
          <li
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected 
                : null
            }
            key={item.id}
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
