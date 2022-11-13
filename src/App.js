import './App.css';
import {Nav} from './Nav';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {RecentProjects} from './RecentProjects';
import {PastProjects} from './PastProjects';
import {About} from './About';

function App() {
  return (
    <div className='App container-fluid'>
      <div id= 'main' className ='row'>
        <div className ='col-lg-3 px-0'>
          <Nav />
        </div>

        <div className = 'col-lg-9'>
          <Routes>
            <Route path= '/' element = {<RecentProjects/>}></Route>
            <Route path= '/PastProjects' element = {<PastProjects />}></Route>
            <Route path= '/About' element = {<About />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
