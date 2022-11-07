import './App.css';
import {Nav} from './Nav';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {RecentProjects} from './RecentProjects';

function App() {
  return (
    <div className="App">
      <div className ='row'>
        <div className ='col-lg-3'>
          <Nav />
        </div>

        <div className = 'col-lg-9'>
          <Routes>
            <Route path= '/' element = {<RecentProjects/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
