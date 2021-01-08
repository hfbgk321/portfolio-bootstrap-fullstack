import React from 'react';
import {Card,Col} from 'react-bootstrap';
import './Homepage.css'

export const BusinessCard = () =>{
  return (
    
            <Card className = "business_card_outer">
                <Card.Body ><div style ={{textAlign:"center", fontFamily:"Oswald, sans-serif",fontSize:"1.5rem"}}>Contact Info</div></Card.Body>
                <Card.Body><span className = "business_card_header">Email</span> : <a href ="mailto:jacky.chen9846@gmail.com">jacky.chen9846@gmail.com</a></Card.Body>
                <Card.Body><span className = "business_card_header">Phone Number</span> : Available Upon Request</Card.Body>
                <Card.Body><span className = "business_card_header">Linkedin</span> : <a href ="https://www.linkedin.com/in/jacky-chen-sbu/">https://www.linkedin.com/in/jacky-chen-sbu/</a></Card.Body>
                <Card.Body><span className = "business_card_header">Github</span> : <a href ="https://github.com/hfbgk321">https://github.com/hfbgk321</a></Card.Body>
            </Card>
  )
}