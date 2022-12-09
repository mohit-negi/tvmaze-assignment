import {Link} from 'react-router-dom'

export const ListItems = ({name,rating,id,image}) =>{
    
    return(
        <Link to={`/singleshow/${id}`} className="listitem">
            <img src={image} alt={name}/>
            <div className='listitem__info'>
                <h4 className='info__name'>{name}</h4>
                <h4 className='info__rating'>{rating.average}</h4>
            </div>
        </Link>
    )
}
