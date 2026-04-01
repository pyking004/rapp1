import React from 'react'
import { useParams } from 'react-router-dom';
const Course = () => {
  let {course} = useParams()
  return (
    <div>
      <h3>{course} - Course Page</h3>
    </div>
  )
}

export default Course;