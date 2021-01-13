import {addEducation} from '../controllers/educationController';
import {addExperience} from '../controllers/experienceController';
import {addSkills} from '../controllers/skillsController';

export const Routes = (app) =>{
  app.route("/").get((req,res) =>{
    res.send({message: "routes connected"})
  })
}