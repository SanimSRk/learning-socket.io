import express from "express";
import { getMessages, sendMessage } from "../routerconteler/messageConteler.js";
import isLogin from "../middlieware/islogin.js";


const router=express.Router()

router.post('/send/:id',isLogin,sendMessage)
router.get('/:id',isLogin,getMessages)


export default router