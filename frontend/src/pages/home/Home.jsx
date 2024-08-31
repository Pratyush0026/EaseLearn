// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./home.css";
// import Testimonials from "../../components/testimonials/Testimonials";

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="home">
//         <div className="home-content">
//           <h1>Welcome to our EaseLearn Platform</h1>
//           <p>Learn, Grow, Excel</p>
//           <button onClick={() => navigate("/courses")} className="common-btn">
//             Get Started
//           </button>
//         </div>
//       </div>
//       <Testimonials />
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Empower Your Future with EaseLearn</h1>
          <p>Join thousands of learners who have transformed their lives</p>
          <button className="hero-btn" onClick={() => navigate("/courses")}>
            Explore Courses
          </button>
        </div>
      </div>

      {/* <div className="home">
        <div className="home-content">
          <h1>Welcome to our EaseLearn Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div> */}

      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-items">
          <div className="feature-item">
            <h3>Expert Instructors</h3>
            <p>Learn from the best in the industry.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible Learning</h3>
            <p>Access courses anytime, anywhere.</p>
          </div>
          <div className="feature-item">
            <h3>Certification</h3>
            <p>Get certified and boost your career.</p>
          </div>
        </div>
      </div>

      <div className="newsletter-signup">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest updates and offers.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="signup-btn">
            Subscribe
          </button>
        </form>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
