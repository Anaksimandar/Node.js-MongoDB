const { Module } = require("module");
const korisnikModel = require('../models/korisnikModel');
const korisnikGet = async (req,res)=>{
    const korisnici = await korisnikModel.find();
    res.status(200).json({message:true , data:korisnici});
    res.end();
}

//thow new Error po defoltu salje html tag <pre>, sa tekucim tekstom . . .

const korisnikInsert = async (req,res)=>{
    if(!req.body.ime){
        res.status(400);
        throw new Error('Unesite Vase ime');
    }
    const noviKorisnik = await korisnikModel.create({
        ime:req.body.ime,
        prezime:req.body.prezime
    })
    res.status(200).json({data:noviKorisnik});
    res.end();
}

const korisnikUpdate = async (req,res)=>{
    const izabranKorisnik = await korisnikModel.findById(req.params.id);
    if(!izabranKorisnik){
        res.status(400);
        throw new Error('Korisnik s unetim id-em ne postoji');
    }
    const azuriranKorisnik = await korisnikModel.findByIdAndUpdate(req.params.id,{ime:req.body.ime,prezime:req.body.prezime},{new:true});// podrazumevano vraca korisnika s unetim id-em(nemodifikovanog)
    console.log(azuriranKorisnik);
    res.status(200).json(azuriranKorisnik);
    res.end();
}

const korisnikDelete= async (req,res)=>{
    res.status(200).json({success:true,data:`Korisnik${req.params.id} je obrisan`});
    res.end();
}

module.exports = {korisnikDelete,korisnikGet,korisnikInsert,korisnikUpdate};