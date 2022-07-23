const Series = require('../models/series.js')

const getAllSeries = (req, res) => {
  Series.find((err, series) => {        
  res.status(200).json(series)
  });
};

const getByIdSeries = (req, res) => {
  try {
    const id = req.params.id
    Series.findById(id, (err, series) => {    

     if(err) {
       res.status(404).send({ message: `${err.message} - não encontrado`})
     } else {
       res.status(200).send(series)
     }})

  } catch (err) {
    res.status(500).send({message: `${err.message} - Erro!!`})
  }
}

const createSerie = (req, res) => {        
  let serie = new Series(req.body)

  serie.save(err => {
    if(err) {
      res.status(500).send({message: `${err.message} - Erro ao cadastrar Serie`})
    } else {
      res.status(201).send(serie)
    }
  })       
}

const updateSerie = (req, res) => {
  const id = req.params.id

  Series.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Serie atualizada!'})
    } else {
      res.status(500).send({message: err.message})
    }
  })  
}

const deleteSerie = (req, res) => {
  const id = req.params.id

  Series.findByIdAndDelete(id, err => {
    if(!err) {
      res.status(200).send({message: 'Serie deletada'})
    } else {
      res.status(500).send({message: err.message})
    }
  }) 
}




module.exports = {  
  getAllSeries,
  getByIdSeries,
  createSerie,
  updateSerie,
  deleteSerie 
} 