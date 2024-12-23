import Job from "../model/jobmodel.js";

export const postjob = async(req,res)=> {
  try {
    const data = req.body; 
    const job = await Job.create(data)
    res.status(201).json({
      message: 'Job created successfully',
      job
    })
} catch (error) {
  

  res.status(500).json({ message: 'Error while creating job' })
}
}

export const getjob = async(req,res)=> {
  try {
    const job = await Job.find({})
    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }
    res.json({
      message: 'jobs fetched successfully',
      job
    })
  } catch (error) 
  {
    res.status(500).json({ message: 'Error while fetching job' })
  }
}
export const getjobbyid = async(req,res)=> {
  try {
    const job = await Job.findById(req.params.id)
    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }
    res.json(job)
  } catch (error) {
    res.status(500).json({ message: 'Error while fetching job' })
  }
}
