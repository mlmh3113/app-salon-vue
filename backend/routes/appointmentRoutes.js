import express from 'express'
import {getAppointmentsByDate , createAppointment} from '../controllers/appointmentController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
        .post(authMiddleware,createAppointment)
        .get(authMiddleware, getAppointmentsByDate)

export default router