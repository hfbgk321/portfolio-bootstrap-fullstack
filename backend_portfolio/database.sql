CREATE DATABASE personal_site_info;

-- {
--     school_name:"Stony Brook University",
--     location:"Stony Brook, Ny",
--     date_parameter: "August 2019 - (Expected: May 2023)",
--     degree: "Bachelors of Science in Computer Science",
--     coursework: ["Data Structures", "Systems Fundamentals 1", "Programming Abstractions",
--       "Fundamentals of Software Development", "Linear Algebra", "Calculus 2", "Foundations of Computer Science", "Probability and Statistics", "Analysis of Algorithms"]
--   }


-- {
--     postion: "Undergraduate Teaching Assistant",
--     company: "SBU",
--     location: "Stony Brook, Ny",
--     date: "December 2020 - Present",
--     bullet_points: ["Successfully supported over 220 students in a course that covers the fundamentals of Object Oriented Programming and Data Structures, along with various paradigms and techniques of programming.","Hosted weekly labs that taught students about code structure and use of systematic software debugging and testing techniques to efficiently identify issues in their assignments.","Facilitated student learning and engagement through weekly office hours and resolved additional concerns through discussion boards and emails."]
--   }


--  type:"Programming Languages",
--     info: [
--       {
--         name:"Java",
--         level:80
--       },
--       {
--         name: "Python",
--         level: 70
--       },
--       {name: "SQL",
--        level: 70
--       }
--     ]


CREATE TABLE experience(
  experience_id uuid DEFAULT uuid_generate_v4(),
  position VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  bullet_points TEXT [] 
)


CREATE TABLE skills(
  type VARCHAR(255) NOT NULL,
  info TEXT []
)