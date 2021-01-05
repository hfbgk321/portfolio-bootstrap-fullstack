import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import {ProjectDisplay} from './components/Projects';
import {NavbarDisplay} from './components/Navbar';
import {ProjectIntroduction} from './components/Project_Introduction';

function App() {
  return (
    <div>
      <NavbarDisplay/>
      <Container>
        <ProjectIntroduction/>
        <ProjectDisplay/>
      </Container>
    </div>
    
  );
}

export default App;
