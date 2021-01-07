import React from 'react';
import {Row,Col} from 'react-bootstrap';
import {education_data} from '../../project_data/experience';
import './experience_page.css'
export const Education = () =>{
  return (
    <Row className="justify-content-md-center">
        <Col lg = "5" className = "education_header">Education</Col>
        <Col lg = "5">
        {education_data.map((school,i)=>{
          return (
            <div key = {i}>
              <h1 className = "education_name">{school.school_name}</h1>
              <h3 className = "education_location">{school.location}</h3>
              <p className ="education_date">{school.date_parameter}</p>
              <p className ="education_degree">{school.degree}</p>
              {(school.coursework).length > 0 ? <h5>Relevant Coursework</h5> :<></> }
              <ul>
                {(school.coursework).map((course,i)=>{
                    return (
                      <li key = {i}>{course}</li>
                    )
                })}
              </ul>
            </div>
          )
        })}
        </Col>
      </Row>
  )
}