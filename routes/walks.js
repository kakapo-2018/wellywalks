const express = require('express')

const db = require('../db')

const router = express.Router()


// --------------- Home

router.get('/', (req, res) => {
  db.getWalks()
    .then(walks => {
      console.log(walks);
      
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

router.get('/profiles', (req, res) => {
  db.getUsers().then((users) => {
    res.render('profiles', {users})
  })
})
// --------------- walks and walks/id

router.post('/walks/', (req, res) => {
  console.log(req.body);
  let id = req.body.walk_id;
  res.redirect('/walks/' + id)
  
})


router.get('/walks/:id', (req, res) => {

  db.getWalkById(req.params.id) // function name is placeholder, change at need
    .then(walk => {
      console.log(walk);
      
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



        console.log(faves);
        db.getWalks().then((walks) => {
          console.log(walks);
          



          
          res.render('profile', {profile, noDupes, walks}) 
        })
        
      })
      
    })
    .catch(err => {
      res.status(500)
      .send("ERROR: " + err.message)
    })
})

//leslie
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
