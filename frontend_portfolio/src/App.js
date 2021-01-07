import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavbarDisplay} from './components/Navbar';
import {ProjectsPage} from './components/Project_Components/ProjectsPage';
import {HomePage} from './components/Homepage_Components/Homepage';
import {ExperiencePage} from './components/Experience_Components/ExperiencePage';
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
          <Route path ="/experiences" component ={ExperiencePage}/>
          <Route path ="/" component = {HomePage}/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
