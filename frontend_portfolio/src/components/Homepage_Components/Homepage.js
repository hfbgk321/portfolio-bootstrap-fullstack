import React from 'react';
import {Container,Row,Col,Image,Card} from 'react-bootstrap';
import profile from '../../project_data/img/prof_pic.png';
import './Homepage.css'
import {BusinessCard} from './BusinessCard';
import ParticlesBg from 'particles-bg';
export const HomePage = () =>{
  return (
    <Container fluid>
        <Row style = {{height:"60vh"}} className="justify-content-md-center">
          <Row style = {{marginTop:"7rem",backgroundColor:"transparent",height:"30rem"}}  className="justify-content-md-center home_page_second_row">
            <Col lg = "4" style ={{height:"26rem"}} className = "text-center" >
              <Image src = {profile}  className ="homepage_img"/>
            </Col>
            <Col lg = "4" className ="d-flex justify-content-center homepage_text_surrounding_col">
              <p style ={{fontFamily:"Open Sans, sans-serif",fontSize:"1rem"}} className ="homepage_text" >
              My name is Jacky Chen. I am currently a sophmore at Stony Brook University, pursuing a Bachelors of Science in Computer Science. I have always been drawn in by both the creative side and the collaboration side of software engineering. Being able to build something together that could potentially impact or be used by millions of people has always been a dream of mine. This dream started from writing simple java programs that manipulated text on the command prompt to now, full stack web applications that can be used by anyone. Along with building my own projects, I also have has experience working along side many other engineers on large scale projects. Feel free to contact me anytime. I am always open to new opportunities.
              </p>
            </Col>
            <Col lg className ="d-flex justify-content-center" style ={{marginTop:"1rem"}}>
              <BusinessCard/>
              </Col>
          </Row>
          
        </Row>
        
    </Container>
  )
}