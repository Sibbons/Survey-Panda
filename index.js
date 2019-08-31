const express = require('express');

const app = express();
const mongooose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');
const bodyParser = require('body-parser');


require('./models/User');
require('./services/passport.js');

mongooose.connect(keys.mongoURI, { useNewUrlParser: true });
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve production asset
    app.use(express.static('client/build'));
    //Express will serve index.html if it doesnt rezonize route

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);