import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//components
import { Navbar } from "./components/Navbar";

//pages
import { Homepage } from './pages/Homepage';
import { SinglePage } from './pages/SinglePage';
import { AboutPage } from './pages/AboutPage';
import { BookMovie } from './pages/BookMovie';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='about/*' element={<AboutPage/>}/>
        <Route path='singleshow/:id' element={<SinglePage/>}/>
        <Route path='singleshow/:id/booknow' element={<BookMovie/>}/>
      </Routes>
    </Router>
  );
}

export default App;
