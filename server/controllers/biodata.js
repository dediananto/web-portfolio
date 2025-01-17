const BiodataModel = require('../models/biodata');
const mongoose = require('mongoose');

class BiodataController {
  static getBiodata (req,res) {
    BiodataModel.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static postBiodata (req,res) {
    BiodataModel.create({
      nama: req.body.nama,
      umur: req.body.umur,
      email: req.body.email,
      phone: req.body.phone,
      about: req.body.about,
      title: req.body.title,
      foto: req.body.foto
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static putBiodata (req,res) {
    BiodataModel.updateOne({_id : req.params.id}, {$set: {
      nama: req.body.nama,
      umur: req.body.umur,
      email: req.body.email,
      phone: req.body.phone,
      about: req.body.about,
      title: req.body.title,
      foto: req.body.foto}
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static deleteBiodata (req,res) {
    BiodataModel.deleteOne({_id : req.params.id
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };
};

module.exports = BiodataController;