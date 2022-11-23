import './App.css';
import {Nav} from './Nav';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {RecentProjects} from './RecentProjects';
import {PastProjects} from './PastProjects';
import {About} from './About';
import {ProjectDetails} from './ProjectDetails';
import {Footer} from './Footer';

function App() {
  return (
    <div className='App container-fluid'>
      <div id= 'main' className ='row'>
        <div className ='col-lg-3 px-0 smallScreenCollapse'>
          <Nav />
        </div>

        <div className = 'col-lg-9'>
          <Routes>
            <Route path= '/' element = {<RecentProjects/>}></Route>
            <Route path= '/PastProjects' element = {<PastProjects />}></Route>
            <Route path= '/About' element = {<About />}></Route>
            <Route path = '/Projects/:project' element = {<ProjectDetails/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
