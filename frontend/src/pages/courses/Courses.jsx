// import React from "react";
// import "./courses.css";
// import { CourseData } from "../../context/CourseContext";
// import CourseCard from "../../components/coursecard/CourseCard";

// const Courses = () => {
//   const { courses } = CourseData();

//   console.log(courses);
//   return (
//     <div className="courses">
//       <h2>Available Courses</h2>

//       <div className="course-container">
//         {courses && courses.length > 0 ? (
//           courses.map((e) => <CourseCard key={e._id} course={e} />)
//         ) : (
//           <p>No Courses Yet!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React, { useState } from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.title && course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses">
      <h2>Available Courses</h2>

      <input
        type="text"
        placeholder="Search Courses"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="course-container">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Courses Found!</p>
        )}
      </div>
    </div>
  );
};

export default Courses;

