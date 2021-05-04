const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const passport = require('./config/passport');
const app = express();

// Define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
  secret: 'facilitiespro',
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/facilitiespro',
  }),
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// MongoDB connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/facilitiespro',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    () => console.log('Connected to MongoDB'),
);

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
