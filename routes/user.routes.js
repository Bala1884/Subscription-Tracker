import { Router } from "express";
import {getUsers, getUser} from '../controllers/user.controller.js';
import authorize from "../config/middlewares/auth.middleware.js";
const userRouter=Router();

userRouter.get('/',getUsers);

userRouter.get('/:id',authorize,getUser);

userRouter.post('/',(req,res)=>res.send({title:'Create a new user'}));

userRouter.put('/:id',(req,res)=>res.send({title:'Update user'}));

userRouter.delete('/:id',(req,res)=>res.send({title:'Delete a user'}));

export default userRouter;