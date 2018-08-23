const express = require('express')

const db = require('../db')

const router = express.Router()


// --------------- Home

router.get('/', (req, res) => {
  db.getWalks()
    .then(walks => {
      res.render('index', {walks})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/add', (req, res) => {
    res.render('add')
})

router.get('/adduser', (req, res) => {
  res.render('adduser')
})

router.post('/adduser', (req, res) => {
  console.log(req.body);
  db.addUser(req.body).then((data) => {
  res.render('adduser', {success: true})
  })
})

router.post('/add', (req, res) => {
  console.log(req.body);
  db.addWalk(req.body).then((data) => {
    res.render('add', {success: true} )
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
