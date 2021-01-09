import React from 'react';
import {Container} from 'react-bootstrap';
import {ProjectIntroduction} from './Project_Introduction';
import {ProjectDisplay} from './ProjectsList'
import ParticlesBg from 'particles-bg';
export const ProjectsPage = () =>{
  return (
    <Container>
      
      <ParticlesBg type="polygon" bg={true}/>
      <ParticlesBg type="polygon" bg={true}/>
        <ProjectIntroduction/>
        <ProjectDisplay/>
        
    </Container>
  )
}