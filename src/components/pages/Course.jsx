import React from 'react'
import { useParams } from 'react-router-dom';
import CourseBar from '../CourseBar';
const Course = () => {
  let {course} = useParams()
  return (
    <div>
      <CourseBar />
      <h3 style={{textAlign:"center"}}> <span style={{color:"red",textTransform:"uppercase"}}>{course}</span> - Course Page</h3>
    </div>
  )
}

export default Course;