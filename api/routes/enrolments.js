const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /enrolments'
    });
});

router.post('/', (req, res, next) => {
    const enrolment = {
        courseId: req.body.courseId
    };
    res.status(200).json({
        message: 'Enrolment was created',
        enrolment: enrolment
    });
});

router.get('/:enrolmentId', (req, res, next) => {
    const id = req.params.enrolmentId;
    if (id === 'active'){
        res.status(200).json({
            message: 'This enrolment is active'
        })
    } else {
        res.status(200).json({
            message: 'You passed an Id'
        });
    }
});

router.patch('/:enrolmentId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated enrolment'
    });
});

router.delete('/:enrolmentId', (req, res, next) => {
    res.status(200).json({
        message: 'Delected enrolment'
    });
});

module.exports = router;