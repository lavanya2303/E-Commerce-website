import express from 'express';
const router = express.Router();
import {
    authUser, deleteUser, getUsers,
    getUserByID,
    getUserProfile, logoutUser, registerUser, updateUser,
    updateUserProfile
} from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout',logoutUser);
router.post('/auth',authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser);

export default router;