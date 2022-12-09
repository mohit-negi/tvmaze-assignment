import { useState, useContext} from "react"
//context
import showsContext from "../context/shows/ShowsContext";
//component
import { Alert } from "../components/Alert"


export const Searchbar = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const {searchShows} = useContext(showsContext);
    const onSearchHandler = (e) =>{
        e.preventDefault();
        searchShows(searchTerm);
    }
  return (
    <div className='searchbar'>
      <Alert message="Please Enter" type="danger"/>
    <form className='searchbar__form'>
        <input type="text" placeholder="Search for the Tv show"
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <button className="btn btn-block" onClick={(onSearchHandler)}>Search</button>
    </form>
    </div>
  )
}
