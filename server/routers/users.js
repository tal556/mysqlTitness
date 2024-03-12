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
    // res.send('List of menu items');
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
router.get('/:id', (req, res) => {
    const menuItemId = req.params.id;
    res.send(`Menu item with ID ${menuItemId}`);
});

module.exports = router;
