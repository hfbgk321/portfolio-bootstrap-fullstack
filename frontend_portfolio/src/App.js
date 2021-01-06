import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import {NavbarDisplay} from './components/Navbar';
import {ProjectsPage} from './components/Project_Components/ProjectsPage';
import {HomePage} from './components/Homepage_Components/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <NavbarDisplay/>
      <Router>
        <Switch>
          <Route path ="/projects" component = {ProjectsPage}/>
          <Route path ="/experiences">
            <h1>Experiences Page Temp</h1>
          </Route>
          <Route path ="/" component = {HomePage}/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
