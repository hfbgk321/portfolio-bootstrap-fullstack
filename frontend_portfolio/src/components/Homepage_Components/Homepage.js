import React from 'react';
import {Container,Row,Col,Image,Card} from 'react-bootstrap';
import profile from '../../project_data/img/prof_pic.png';
import './Homepage.css'
export const HomePage = () =>{
  return (
    <Container fluid>
        <Row style = {{height:"60vh"}} className="justify-content-md-center">
          <Row style = {{marginTop:"7rem",backgroundColor:"white",height:"30rem"}}  className="justify-content-md-center home_page_second_row">
            <Col lg = "4" style ={{height:"26rem"}} className = "text-center" >
              <Image src = {profile}  className ="homepage_img"/>
            </Col>
            <Col lg = "4" className ="d-flex justify-content-center homepage_text_surrounding_col">
              <p style ={{fontFamily:"Open Sans, sans-serif",fontSize:"1rem"}} className ="homepage_text" >
              My name is Jacky Chen. I am currently a sophmore at Stony Brook University, pursuing a Bachelors of Science in Computer Science. I have always been drawn in by both the creative side and the collaboration side of software engineering. Being able to build something together that could potentially impact or be used by millions of people has always been a dream of mine. This dream started from writing simple java programs that manipulated text on the command prompt to now, full stack web applications that can be used by anyone. Along with building my own projects, I also have has experience working along side many other engineers on large scale projects. Feel free to contact me anytime. I am always open to new opportunities.
              </p>
            </Col>
            <Col lg className ="d-flex justify-content-center" style ={{marginTop:"1rem"}}>
            <Card className = "business_card_outer">
                <Card.Body ><div style ={{textAlign:"center", fontFamily:"Oswald, sans-serif",fontSize:"1.5rem"}}>Contact Info</div></Card.Body>
                <Card.Body><span className = "business_card_header">Email</span> : <a href ="mailto:jacky.chen9846@gmail.com">jacky.chen9846@gmail.com</a></Card.Body>
                <Card.Body><span className = "business_card_header">Phone Number</span> : Available Upon Request</Card.Body>
                <Card.Body><span className = "business_card_header">Linkedin</span> : <a href ="https://www.linkedin.com/in/jacky-chen-sbu/">https://www.linkedin.com/in/jacky-chen-sbu/</a></Card.Body>
                <Card.Body><span className = "business_card_header">Github</span> : <a href ="https://github.com/hfbgk321">https://github.com/hfbgk321</a></Card.Body>
            </Card></Col>
          </Row>
          
        </Row>
        
    </Container>
  )
}