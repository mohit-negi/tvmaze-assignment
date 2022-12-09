import {useReducer} from 'react';
import axios from 'axios';
import ShowsContext from './ShowsContext'
import ShowsReducer from './ShowsReducer';
import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW
} from '../types';

const ShowsState =(props) =>{
    const initialState = {
        shows: [],
        singleShow: {},
        loading: 'failed'
    };
    const searchShows = async (searchTerm) =>{
        dispatch({type: SET_LOADING});
        const {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

        console.log(data);

        dispatch({
            type:SEARCH_SHOWS,
            payload: data
        })
    }
    const [state,dispatch] = useReducer(ShowsReducer,initialState)
    return(
        <ShowsContext.Provider
        value={{
            shows: state.shows,
            singleShow: state.singleShow,
            loading: state.loading,
            searchShows,

        }}
        >
      {props.children}
    </ShowsContext.Provider>

    )
}
export default ShowsState;