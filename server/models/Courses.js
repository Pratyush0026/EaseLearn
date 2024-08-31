// import mongoose from "mongoose";

// const schema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },

//   image: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   duration: {
//     type: Number,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   createdBy: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export const Courses = mongoose.model("Courses", schema);


import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number, // Keep as Number if you want duration in weeks or hours as a numerical value
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // New fields added
  instructor: {
    type: String, // Store the name of the instructor
  },
  enrollmentStatus: {
    type: String, // Store status like 'open', 'closed', etc.
  },
  schedule: {
    type: String, // Store the schedule details
  },
  location: {
    type: String, // Store the location details
  },
  prerequisites: {
    type: String, // Store any prerequisites for the course
  },
  syllabus: [{
    type: String, // Store syllabus as an array of strings
  }],
  likes: {
    type: Number,
    default: 0, // Initialize likes with 0
  },
});

export const Courses = mongoose.model("Courses", schema);
