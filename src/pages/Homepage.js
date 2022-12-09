import { useContext } from "react"
//context
import ShowsContext from "../context/shows/ShowsContext"
//components
import { Searchbar } from "../components/Searchbar"
import {ListItems} from "../components/ListItems"

export const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const {loading,shows} = showsContext;
  return (
    <div className="homepage">
      <Searchbar/>
      {
      loading ? <h2>Loading.....</h2> :
      <div className="homepage__list">
          {shows.map((item)=>{
            return (
              <ListItems 
            key={item.show.id}
            id={item.show.id}
            image={item.show.image.original ? item.show.image.medium : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"}
            name={item.show.name}
            rating={item.show.rating.average ? item.show.rating : "No rating"}
            />
            );
            
            
          })}
        </div>
      }
    </div>
  )
}
/*

*/