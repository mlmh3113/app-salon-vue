import mongoose from "mongoose";


const AppointmentSchema = mongoose.Schema({
    services:[{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Services'
    }],
    date:{
        type : Date
    },
    hours:{
        type : String
    },
    totalAmount:{
        type:Number
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    time:{
        type : String
    }

})

const Appointment = mongoose.model('Appointment',AppointmentSchema)

export default Appointment

