const mongoose = require('mongoose');

const korisnikSema = mongoose.Schema({
    ime:{
        type:String,
        required:[true,'Unesite ime korisnika']
    },
    prezime:{
        type:String,
        required:[true,'Unesite ime korisnika']
    }
})

const modelKorisnik = mongoose.model('Korisnik',korisnikSema);

module.exports = modelKorisnik;