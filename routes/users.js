import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();


import { getUsers,createUse, getUser,deleteUser,updateUser } from '../controllers/users.js';

//all path here starts with /users
router.get('/', getUsers);
router.post('/',createUse );
router.get('/:id', getUser);
router.delete('/:id',deleteUser );
router.patch('/:id', updateUser);
export default router;