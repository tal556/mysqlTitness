const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('List of menu items');
  });
  
  // GET /menu/:id
  router.get('/:id', (req, res) => {
    const menuItemId = req.params.id;
    res.send(`Menu item with ID ${menuItemId}`);
    
  });
  module.exports = router;
