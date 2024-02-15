import mongoose from 'mongoose';
import colors from 'colors';

export const db = async () => {

    try {
        const db = await mongoose.connect(process.env.MONGO_URL);
        console.log(colors.yellow.underline.bold('Base de datos conectada'))
    } catch (error) {
        console.log(colors.red.underline.bold(`Error: ${error.message}`));
        process.exit(1);
    }
}

