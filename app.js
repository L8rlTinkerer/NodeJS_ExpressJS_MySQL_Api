/* express applicaion to handle requests */
const express = require('express'); 
const app = express(); // spin up an express application
const morgan = require('morgan'); 

// import routes
const courseRoutes = require('./api/routes/courses');
const enrolmentRoutes = require('./api/routes/enrolments');

// console logging middleware
app.use(morgan('dev'));

// requests middleware
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