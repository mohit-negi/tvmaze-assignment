import { useState, useContext} from "react"
//context
import showsContext from "../context/shows/ShowsContext";
import AlertsContext from "../context/alerts/AlertsContext";

//component
import { Alert } from "../components/Alert"

export const Searchbar = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const ShowsContext = useContext(showsContext);
    const { searchShows } = ShowsContext;

    const {alert,setAlert} = useContext(AlertsContext)
    const onSearchHandler = (e) =>{
        e.preventDefault();
        if(searchTerm === ""|| searchTerm === null)
        {
          setAlert("Please enter something","danger")
        }else{
        searchShows(searchTerm);
        }
    }
  return (
    <div className='searchbar'>
      {alert ? <Alert message={alert.message} type={alert.type}/> : null}
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
