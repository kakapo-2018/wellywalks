const express = require('express')

const db = require('../db')

const router = express.Router()


// --------------- Home

router.get('/', (req, res) => {
  db.getWalks()
    .then(walks => {
      res.render('index', walks[0]) // or {walks: walks}
    })
    .catch(err => {
      res.status(500)
      .send("ERROR: " + err.message)
    })
})


// --------------- walks and walks/id

router.get('/walks/:id', (req, res) => {
  db.getWalkById(req.params.id) // function name is placeholder, change at need
    .then(walk => {
      res.render('view', walk) //can't see the walk yet, assuming it will come later
    })
    .catch(err => {
      res.status(500)
      .send("ERROR: " + err.message)
    })
})


module.exports = router
