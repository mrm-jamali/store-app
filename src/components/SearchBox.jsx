import { BsSearch } from "react-icons/bs";
import { createQuery } from "../helper/helper";
import styles from "./SearchBox.module.css"

function SearchBox({search,setSearch,setQuery}) {
     const SearchHandler = () => {
    // setQuery((query) => ({ ...query, search }));
  setQuery((query) =>createQuery(query,{search}));
  };
  return (
    <div>
        <div  className={styles.search}>
              <input type="text" value={search} placeholder="Search..." onChange={event=>setSearch(event.target.value.toLowerCase().trim())} />
              <button onClick={SearchHandler }>
                <BsSearch />
              </button>
            </div>
    </div>
  )
}

export default SearchBox
