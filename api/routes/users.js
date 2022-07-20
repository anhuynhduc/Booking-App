import express from "express";
import {deleteUser, getAllUser, getUser, updateUser} from "../controllers/user.js";
import {verifyToken, verityAdmin, verityUser} from "../utils/verityToken.js";

const router = express.Router()

/*
router.get("/checkAuthentication", verifyToken, (req,res,next)=>{
res.send("hello user, you are logged in")
})

router.get("/checkUser/:id", verityUser, (req,res,next)=>{
    res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkAdmin/:id", verityAdmin, (req,res,next)=>{
    res.send("hello admin, you are logged in and you can delete all accounts")
})

 */

//UPDATE
router.put("/:id", verityUser, updateUser)

//DELETE
router.delete("/:id", verityUser, deleteUser)

//GET
router.get("/:id", verityUser, getUser)

//GET ALL
router.get("/", verityAdmin, getAllUser)

export default router
