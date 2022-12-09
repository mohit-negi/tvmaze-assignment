import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//components
import { Navbar } from "./components/Navbar";

//pages
import { Homepage } from './pages/Homepage';
import { SinglePage } from './pages/SinglePage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='about/*' element={<AboutPage/>}/>
        <Route path='singleshow/:id' element={<SinglePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
