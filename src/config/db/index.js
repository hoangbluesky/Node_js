import mongoose from 'mongoose';

async function connect() {
    try {
        if (await mongoose.connect('mongodb://127.0.0.1/f8_education_dev')) {
            console.log('Ket noi oki');
        }
    } catch (error) {
        console.log('Ket noi Ko thanh cong');
    }
}
export { connect };
