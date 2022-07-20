import express from "express";
import {verityAdmin} from "../utils/verityToken.js";
import {createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability} from "../controllers/room.js";

const router = express.Router()

//CREATE
router.post("/:hotelid", verityAdmin, createRoom)

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verityAdmin, updateRoom)

//DELETE
router.delete("/:id/:hotelid", verityAdmin, deleteRoom)

//GET
router.get("/:id", getRoom)

//GET ALL
router.get("/", getAllRoom)


export default router