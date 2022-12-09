import { useContext } from "react"
//context
import ShowsContext from "../context/shows/ShowsContext"
//components
import { Searchbar } from "../components/Searchbar"

export const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const {loading,shows} = showsContext;
  return (
    <div className="homepage">
      <Searchbar/>
      {
      loading ? <h2>Loading.....</h2> :
      <div>
          {shows.map(item=>{
            return <h3>{item.show.name}</h3>
          })}
        </div>
      }
    </div>
  )
}
