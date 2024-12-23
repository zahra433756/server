import express from 'express';
import { getjob, getjobbyid, postjob } from '../controller/jobcontroller.js';

const jobroutes = express.Router();

jobroutes.route('/createjob').post(postjob)

jobroutes.route('/getjob').get(getjob)


jobroutes.route('/getbyid/:id').get(getjobbyid)

export default jobroutes;

