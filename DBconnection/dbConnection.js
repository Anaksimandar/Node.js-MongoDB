const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const connection = async ()=>{
    try{
        const dbConnection = await mongoose.connect('mongodb+srv://aco:anaksimandar@cluster0.pvnoa.mongodb.net/MERNapp?retryWrites=true&w=majority')
        console.log(dbConnection.connection.host);
    }catch(err){
        console.log('Doslo je do greske');
    }
}

module.exports = {connection};