/* express applicaion to handle requests */
const express = require('express'); 
const app = express(); // spin up an express application
const morgan = require('morgan'); 
const bodyParser = require('body-parser');

// import routes
const courseRoutes = require('./api/routes/courses');
const enrolmentRoutes = require('./api/routes/enrolments');

// activate general middleware
app.use(morgan('dev')); // console logging
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


// activate requests/routes middleware
app.use('/courses', courseRoutes);
app.use('/enrolments', enrolmentRoutes);

// handle route not found errors
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// handle errors thrown anywhere in app
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res. json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;