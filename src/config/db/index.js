import mongoose from 'mongoose';

const uri = 'mongodb+srv://ngaha1534:SZfeL5cT3SGaKw1W@hoangde.zdwpm.mongodb.net/f8_education_dev'
// const uri = 'localhost:27017/f8_education_dev'
async function connect() {
    try {
        await mongoose.connect(uri)
        console.log('Ket noi oki');

    } catch (error) {
        console.log('error: ', error)
        console.log('Ket noi Ko thanh cong');
    }
}
export { connect };
