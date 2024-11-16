import css from "./SearchBox.module.css"


export default function SearchBox({value, onSearch}) {
    return(
        <div className={css.searchContainer}>
        <label htmlFor="filter" className={css.SearchLabel} >
            Find contacts by name
        </label>
        <input type="text" name="filter" id="filter"  value={value} onChange={(e) => onSearch(e.target.value) }/>
        </div>
    )
}