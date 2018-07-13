const express = require('express')
const db = require('../db/companies')

const router = express.Router()

router.post('/add', (req, res) => {
  const company = req.body
  db.addCompany(company)
    .then((id) => {
      res.json({newId: id})
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to save company')
    })
})

router.get('/', (req, res) => {
  db.getAllCompanies()
    .then((companies) => {
      res.json(companies)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find companies')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getCompany(id)
    .then((company) => {
      res.json(company)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find company')
    })
})

router.get('/profile/:id', (req,res) => {
  const id = Number(req.params.id)
  db.getProfile(id)
    .then()
})
module.exports = router
