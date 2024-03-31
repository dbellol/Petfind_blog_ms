const express = require('express');
const { createCategory, updateCategory, deleteCategory, getCategory, getallCategory } = require('../controller/blogCatController');
/*const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');*/
const router = express.Router();

router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id',deleteCategory);
router.get('/:id',getCategory);
router.get('/',getallCategory);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
router.get('/:id',getCategory);
router.get('/',getallCategory);
module.exports=router;
