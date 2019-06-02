const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid/v4');


// get all member
router.get('/', (req, res) => res.json(members));

//get single member
router.get('/:id', (req, res) => {
    const memberId = req.params.id;
    const found = members.some(member => member.id == memberId);
    if (found) {
        return res.json(members.filter(member => member.id == memberId));
    }

    return res.status(404).json({
        'errors': {
            'status_code': 400,
            'message': `Members id with ${memberId} dose not found.`
        }
    });

});

//create member
router.post('/', (req, res) => {
    // res.send(req.body)
    const newMember = {
        id: uuid(),
        name: req.body.name,
        email: req.body.email,
        username: req.body.username
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({
            'erros': {
                'status_code': 400,
                'message': `Please include name and email`
            }
        })
    }

    members.push(newMember);
    res.status(201).json(members);
});

//update member
router.put('/:id', (req, res) => {
    const memberId = req.params.id;
    const found = members.some(member => member.id == memberId);
    if (found) {
        const updateMember = req.body;
        members.map(member => {
            if (member.id == memberId) {
                member.name = req.body.name ? req.body.name : member.name;
                member.email = req.body.email ? req.body.email : member.email;
                member.username = req.body.username ? req.body.username : member.username;

                res.status(200).json({
                    'errors': {
                        'status_code': 200,
                        'message': `Members is Updated.`,
                        'member': member
                    }
                });
            }
        })
    }

    return res.status(404).json({
        'errors': {
            'status_code': 400,
            'message': `Members id with ${memberId} dose not found.`
        }
    });

});

//delete
router.delete('/:id', (req, res) => {
    const memberId = req.params.id;
    const found = members.some(member => member.id == memberId);
    if (found) {
        res.status(200).json({
            'errors': {
                'status_code': 200,
                'message': `Members is deleted.`,
                'members': members.filter(member => member.id != memberId)
            }
        });
    }

    return res.status(404).json({
        'errors': {
            'status_code': 400,
            'message': `Members id with ${memberId} dose not found.`
        }
    });

});

module.exports = router;