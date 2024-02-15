import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import servicesRoutes from './routes/servicesRoutes.js'
import AuthRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import { db } from './config/db.js'

dotenv.config();

//configurar la app
const app = express();

//levantar la base de datos
db();

//habilitar cors

const whiteList = [ process.env.FRONTEND_URL , undefined ];

const corsOptions = {
    origin : function(origin, callback) {
        if(whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Error de Cors'));
        }
    }
}

app.use(cors(corsOptions));

//habilitar lectura de body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//definir rutas
app.use('/api/services', servicesRoutes)
app.use('/api/auth', AuthRoutes)
app.use('/api/appointments',appointmentRoutes)

//definir puerto
const port = process.env.PORT || 4000;

//levantar el servidor
app.listen(port, () => {
    console.log(colors.blue.underline.bold(`el servidor esta corriendo en el puerto ${port}`));
})