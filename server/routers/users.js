const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/',async (req, res) => {
    try {
       var data = await db.getAllUsers();
        res.status(201).json({ message: 'User added successfully' , data:data});
    } catch (error) {
        console.error('Error get all users:', error);
        res.status(500).json({ error: 'Error getting users' });
    }
});

router.post('/', async (req, res) => {
    const { first_name, last_name, email, password, active, insertData, updateData } = req.body;

    // Check if name and email are provided
    if (!first_name || !email || !last_name || !password || !active || !insertData || !updateData) {
        return res.status(400).json({ error: 'need to check for wmpty required field' });
    }

    // Insert the user into the database
    try {
        await db.insertUser(first_name, last_name, email, password, active, insertData, updateData);
        res.status(201).json({ message: 'User added successfully' });
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Error inserting user' });
    }
});

  
// GET /menu/:id
router.get('/:id', async (req, res) => {
    const menuItemId = req.params.id;
    try {
        var data = await db.getUserById(menuItemId);
        res.status(201).json({ message: 'User added successfully' , data:data});

    } catch (error) {
        console.error('Error get all users:', error);
        res.status(500).json({ error: 'Error getting user by id' });
    }
});

module.exports = router;
