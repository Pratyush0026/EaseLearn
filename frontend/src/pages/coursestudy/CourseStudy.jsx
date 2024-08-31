// import React, { useEffect } from "react";
// import "./coursestudy.css";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import { server } from "../../main";

// const CourseStudy = ({ user }) => {
//   const params = useParams();

//   const { fetchCourse, course } = CourseData();
//   const navigate = useNavigate();

//   if (user && user.role !== "admin" && !user.subscription.includes(params.id))
//     return navigate("/");

//   useEffect(() => {
//     fetchCourse(params.id);
//   }, []);
//   return (
//     <>
//       {course && (
//         <div className="course-study-page">
//           <img src={`${server}/${course.image}`} alt="" width={350} />
//           <h2>{course.title}</h2>
//           <h4>{course.description}</h4>
//           <h5>by - {course.createdBy}</h5>
//           <h5>Duration - {course.duration} weeks</h5>
//           <Link to={`/lectures/${course._id}`}>
//             <h2>Lectures</h2>
//           </Link>
//         </div>
//       )}
//     </>
//   );
// };

// export default CourseStudy;


import React, { useEffect, useState } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { fetchCourse, course } = CourseData();
  
  const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(false);

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const toggleSyllabus = () => {
    setIsSyllabusExpanded(!isSyllabusExpanded);
  };

  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt={course.title} width={350} />
          <h2>{course.title}</h2>
          <h4>{course.description}</h4>
          <h5>Instructor: {course.createdBy}</h5>
          <h5>Duration: {course.duration} weeks</h5>
          <h5>Enrollment Status: {course.enrollmentStatus || "N/A"}</h5>
          <h5>Schedule: {course.schedule || "N/A"}</h5>
          <h5>Location: {course.location || "Online"}</h5>
          <h5>Pre-requisites: {course.prerequisites || "None"}</h5>

          <div className="syllabus-section">
            <h4 onClick={toggleSyllabus} className="syllabus-header">
              Syllabus {isSyllabusExpanded ? "▲" : "▼"}
            </h4>
            {isSyllabusExpanded && (
              <ul className="syllabus-list">
                {course.syllabus && course.syllabus.length > 0 ? (
                  course.syllabus.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <p>No syllabus available</p>
                )}
              </ul>
            )}
          </div>

          <Link to={`/lectures/${course._id}`}>
            <h2>Lectures</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
