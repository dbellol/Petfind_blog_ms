const express = require('express');
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeTheBlog, dislikeTheBlog, uploadImages } = require('../controller/blogController');
/*const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');*/
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadImage');
const router = express.Router();

router.post('/', createBlog);
router.post('/upload/:id', uploadPhoto.array("images",2), blogImgResize,uploadImages);
router.put("/likes", likeTheBlog);
router.put("/dislikes", dislikeTheBlog);
router.put('/:id', updateBlog);
router.get('/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/:id', deleteBlog);
module.exports=router;