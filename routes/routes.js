import express from 'express';
import dotenv from 'dotenv';



import { createUser, loginUser, confirmAdmin, confirmRole, getRole } from "../controllers/UserController.js";
import { createPost, getPost, getPosts, deletePost, editPost } from "../controllers/PostController.js";
import { createComment, deleteComment } from "../controllers/CommentController.js";

const router = express.Router();
dotenv.config();

// read
router.get(`/${process.env.NODE_ENV_GET_POSTS_URL}`, getPosts);
router.get(`/${process.env.NODE_ENV_GET_POST_URL}/:postId`, getPost);
router.post(`/${process.env.NODE_ENV_LOGIN_URL}`, loginUser);
router.post(`/${process.env.NODE_ENV_SET_ROLE_URL}`, getRole);
router.post(`/${process.env.NODE_ENV_ADMIN_CONFIRM_URL}`, confirmAdmin);
router.post(`/${process.env.NODE_ENV_ROLE_CONFIRM_URL}`, confirmRole);


// update
router.post(`/${process.env.NODE_ENV_UPDATE_POST_URL}/:postId`, editPost);


// create
router.post(`/${process.env.NODE_ENV_ADD_POST_URL}`, createPost);
router.post(`/${process.env.NODE_ENV_SEND_COMMENT_URL}/:postId/comments`, createComment);
router.post(`/${process.env.NODE_ENV_REGISTER_URL}`, createUser);

// delete
router.delete(`/${process.env.NODE_ENV_DELETE_POST_URL}/:postId`, deletePost);
router.post(`/${process.env.NODE_ENV_DELETE_COMMENT_URL}/:postId/:commentId`, deleteComment);

export default router;