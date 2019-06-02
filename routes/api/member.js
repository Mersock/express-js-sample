const express = require('express');
const router = express.Router();
const members = require('../../members');


// get all member
router.get('/', (req, res) => res.json(members));

//get single member
router.get('/:id', (req, res) => {
    const memberId = req.params.id;
    const found = members.some(member => member.id == memberId);
    if (found) {
        res.json(members.filter(member => member.id == memberId));
    }

    res.status(404).json({
        'errors': {
            'status_code': 400,
            'message': `Members id with ${memberId} dose not found.`
        }
    });

});

//create member
router.post('/', (req, res) => {
    res.send(req.body)
});

module.exports = router;