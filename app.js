//Requires
const express = require('express')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const path = require('path')
const User = require('./models/user')

const ExpressError = require('./utils/ExpressError')

const userRoutes = require('./routes/userRoutes')
const bcaaRoutes = require('./routes/bcaaRoutes')
const airRoutes = require('./routes/airRoutes')
const opsRoutes = require('./routes/opsRoutes')
const ansRoutes = require('./routes/ansRoutes')
const agaRoutes = require('./routes/agaRoutes')
const secRoutes = require('./routes/secRoutes')
const portalRoutes = require('./routes/portalRoutes')

//Connecting to database
mongoose.connect('mongodb://localhost:27017/bcaa')
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', ()=>{
    console.log('Database connected');
});


const app = express()

//app configuration
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const sessionConfig = {
    name: 'session',
    secret: 'Thisshouldbebettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7
    }
}
app.use(session(sessionConfig))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


//flash 
app.use((req,res,next)=>{
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    res.locals.currentUser = req.user
    next()
})


//Routes
app.use('/', userRoutes)
app.use('/bcaa', bcaaRoutes)
app.use('/bcaa/airworthiness', airRoutes)
app.use('/bcaa/flightoperations', opsRoutes)
app.use('/bcaa/ans', ansRoutes)
app.use('/bcaa/aerodrome', agaRoutes)
app.use('/bcaa/security', secRoutes)
app.use('/bcaa/staffportal', portalRoutes)


//404 error 
app.all('*', (req, res, next)=>{
    next(new ExpressError('The page your looking for was moved, removed, renamed or might never existed.', 404))
})

//Error Handler
app.use((err, req, res, next)=>{
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh no, something went wrong!'
    res.status(statusCode).render('BCAA/error', { err, statusCode })
})

app.listen(3000, ()=>{
    console.log('serving on port 3000')
})