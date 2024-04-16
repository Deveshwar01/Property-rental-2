import express from "express";
import {
    Login,
    getMyProfile,
    Register,
    Logout
} from '../controllers/user.js';

const router = express.Router();

router.post('/new', Register);
router.post('/login', Login);
router.get('/logout', Logout);
router.get('/me', getMyProfile);

export default router;
