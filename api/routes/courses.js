const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /courses'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /courses'
    });
});

router.get('/:courseId', (req, res, next) => {
    const id = req.params.courseId;
    if (id === 'active'){
        res.status(200).json({
            message: 'This course is active'
        })
    } else {
        res.status(200).json({
            message: 'You passed an Id'
        });
    }
});

router.patch('/:courseId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated course'
    });
});

router.delete('/:courseId', (req, res, next) => {
    res.status(200).json({
        message: 'Delected course'
    });
});

module.exports = router;