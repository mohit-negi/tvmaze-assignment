import { useState } from "react"

export const Searchbar = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const onSearchHandler = (e) =>{
        e.preventDefault();
        console.log("Searching for "+searchTerm);
    }
  return (
    <div className='searchbar'>
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
