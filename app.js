const engine =  require('express-handlebars');
const express = require('express');
const routes = require('./routes/web');
const passport = require('passport')
const session = require('express-session')
let RedisStore = require("connect-redis")(session)


// config
const config = require('./config')

const { createClient } = require("redis")
let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

// coll express app start point
const app = express();
app.use(session({
    store: new RedisStore({
      client: redisClient
    }),
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())

app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', routes);

app.listen(3000)
