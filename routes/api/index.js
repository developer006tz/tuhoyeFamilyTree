const express  = require('express');
const familyRoutes = require('./family');
const treeRoutes = require('./tree');
const storiesRoutes = require('./stories');
const chatsRoutes = require('./chats');
const router = express.Router();

router.use('/family', familyRoutes);
router.use('/tree', treeRoutes);
router.use('/stories', storiesRoutes);
router.use('/chats', chatsRoutes);

module.exports = router;