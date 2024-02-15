import Appointment from "../models/Appointment.js";
import { parse, formatISO, startOfDay, endOfDay , isValid } from "date-fns";

const createAppointment = async (req, res) => {
  const appointment = req.body;
  appointment.user = req.user._id.toString();

  try {
    const newAppointment = new Appointment(appointment);
    await newAppointment.save();
    res.json({
      msg: "Tu reserva ha sido creada",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAppointmentsByDate = async (req, res) => {
  const { date } = req.query;
  const newDate = parse(date, "dd/MM/yyyy", new Date());

  if (!isValid(newDate)) {
    return res.status(404).json({
      msg: "Fecha no valida",
    });
  }

  const formatedDate = formatISO(newDate);

  try {
    const appointments = await Appointment.find({
      date: {
        $gte: startOfDay(new Date(formatedDate)),
        $lte: endOfDay(new Date(formatedDate)),
      },
    }).select('time');
    if (appointments.length === 0) {
      return res.status(404).json({
        msg: "No hay turnos para esta fecha",
      });
    }
    res.json(appointments);
  } catch (error) {
    console.log(error);
  }
};

export { createAppointment, getAppointmentsByDate };
