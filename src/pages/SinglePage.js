import { useEffect, useContext } from "react";
import { useParams,Link } from "react-router-dom";
import showsContext from "../context/shows/ShowsContext"

export const SinglePage = ({match}) => {
  const { getSingleShow, singleShow, loading } = useContext(showsContext);
  const {id} = useParams();
  useEffect(() => {
    getSingleShow(id);
    console.log(id);

    // eslint-disable-next-line
  }, [])
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <>
      {loading ? <h2 className="loading">Loading....</h2> :
        <div className="singleshow">
          <img src={singleShow.image ? singleShow.image.medium : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} alt={singleShow.name} />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "No offical site"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
            
            <Link to={`/singleshow/${id}/booknow`} className="listitem">
              <span className="singleshow__booknow"> Book Now</span>
            </Link>
          </div>
        </div>
      }
    </>
  )
}
