import {pool} from '../db';

export const addEducation = (req,res) =>{
  const school_name = req.body.school_name;
  const date_parameter = req.body.date_parameter;
  const degree = req.body.degree;
  const coursework = req.body.coursework;
  pool.query('INSERT INTO education(school_name,date_parameter,degree,coursework) VALUES($1,$2,$3,$4) RETURNING *',[school_name,date_parameter,degree,coursework]).then(education => {
    return res.json(education.rows[0]);
  }).catch(err =>{
    res.status(404).error(err);
  })
}