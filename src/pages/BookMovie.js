import { useContext , useEffect, useState } from "react"
import showsContext from "../context/shows/ShowsContext"

export const BookMovie = ({props}) => {
    const {singleShow} = useContext(showsContext)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    
    const win = window.sessionStorage;
    const handleSubmit = (e) =>{
        e.preventDefault();
        win.clear();
        setName('');
        setEmail('');
        setNumber('');
    }
    //const {singleShow} = useContext(showsContext)
    useEffect(()=>{
        if(win.getItem('name'))
        setName(win.getItem('name'));
        if(win.getItem('email'))
        setEmail(win.getItem('email'));
        if(win.getItem('number'))
        setNumber(win.getItem('number'));
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(()=>{
        win.setItem('name',name);
        win.setItem('email',email);
        win.setItem('number',number);
    //eslint-disable-next-line react-hooks/exhaustive-deps    
    },[name,email,number])
  return (
        <div className='main_bg'>
            <div className="form">
                <div className="form-text">
                <h1>{singleShow.name}</h1>
                </div>
                <div className="main-form">
                    <form action="index.php" method="get" onSubmit={handleSubmit}>
                        <div>
                            <span>Your full name ?</span>
                            <input type="text" value={name}name="name" id="name" placeholder="Write your name here..." required onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div>
                            <span>Your email address ?</span>
                            <input type="email" value={email}name="name" id="name" placeholder="Write your email here..." required onChange={(e)=>{setEmail(e.target.value)}}/> 
                        </div>
                        <div>
                            
                            <span>How many people ?</span>
                            <select name="people" id="people" required>
                                <option value="">Number of people</option>
                                <option value="1">1 People</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                            </select>
                        
                        </div>
                        <div>
                            <span>What time ?</span>
                            <input type="text" name="time" id="time" placeholder="Time" required/>
                        </div>
                        <div>
                            <span>What is the date ?</span>
                            <input type="date" name="date" id="date" placeholder="date" required/>
                        </div>
                        <div>
                            <span>Your phone number ?</span>
                            <input type="number" value={number} name="number" id="number" placeholder="Write your number here..." required onChange={(e)=>{setNumber(e.target.value)}}/>
                        </div>
                        <div id="submit">
                            <input type="submit" value="Book Now" id="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      )
}
