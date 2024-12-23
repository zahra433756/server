import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
  title: { type: String,required: true },
  description: { type: String,required: true },
  location: { type: String,required: true },
  company: { type: String, required: true },
  salary: { type: Number,required: true },
  // jobType: { type: String, required: true },
  // jobCategory: { type: String, required: true },
  // jobStatus: { type: String, required: true },
  // postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // date: { type: Date, default: Date.now },
  // experience: { type: Number,required: true },
})
const Job = mongoose.model('Job', jobSchema);

export default Job;