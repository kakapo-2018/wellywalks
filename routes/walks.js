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
  let name = req.body.name
  db.addUser(req.body).then((data) => {
  res.render('adduser', {name, success: true})
  })
})

router.post('/add', (req, res) => {
  let name = req.body.walk_name;
  let dogs = req.body.dog_friendly;
  if (dogs == 'on'){
    dogs = 'true';
  } else {
    dogs = 'false'
  }
  req.body.dog_friendly = dogs;

  db.addWalk(req.body).then((data) => {
    res.render('add', {name, success: true} )
  })
})

router.get('/profiles', (req, res) => {
  db.getUsers().then((users) => {
    res.render('profiles', {users})
  })
})
// --------------- walks and walks/id

router.post('/walks/', (req, res) => {
 
  let id = req.body.walk_id;
  res.redirect('/walks/' + id)
  
})


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

// --------------- profiles id

router.get('/profiles/:id', (req, res) => {
  db.getProfilesById(req.params.id) // function name is placeholder, change at need
    .then(profile => {
      db.getUserFaves(req.params.id).then((faves) => {
        const obj = faves.reduce((acc, entry, i, arr) => {
          if (!acc.hasOwnProperty(entry.id)) acc[entry.id] = entry
          return acc
        }, {})
        const noDupes = Object.keys(obj).map(key => obj[key])
        db.getWalks().then((walks) => {
          res.render('profile', {profile, noDupes, walks}) 
        })
        
      })
      
    })
    .catch(err => {
      res.status(500)
      .send("ERROR: " + err.message)
    })
})


router.post('/faves/:id', (req, res) => {
  let faveUser = req.body;
  let userWhoFav = req.params.id;
  db.allFaves().insert({'user_id': userWhoFav, 'favwalk_id': faveUser.favuser_id})
  .then((data) => {
    db.getUserFaves(req.params.id).then((data2) => {
      res.redirect('/profiles/' + userWhoFav)
    })
  })
})

module.exports = router
