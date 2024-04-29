import { search } from "../images/images";

const SearchBar =()=>{
    return(
        <div className="search">
            <input type="text" placeholder="Search Product and Services" />
            <div className="search-container">
                <img src={search} alt="search" />
            </div>
        </div>
    )
}
export default SearchBar;