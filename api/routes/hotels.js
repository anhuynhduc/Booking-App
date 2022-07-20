import express from "express";
import {createError} from "../utils/error.js";
import {
        countByCity,
        countByType,
        createHotel,
        deleteHotel,
        getAllHotel,
        getHotel, getHotelRooms,
        updateHotel
} from "../controllers/hotel.js";
import {verityAdmin } from "../utils/verityToken.js";
import Hotel from "../models/Hotel.js";

const router = express.Router()

        //CREATE
        router.post("/", verityAdmin, createHotel)

       //UPDATE
        router.put("/:id", verityAdmin, updateHotel)

        //DELETE
        router.delete("/:id", verityAdmin, deleteHotel)

        //GET
        router.get("/find/:id", getHotel)

        //GET ALL
        router.get("/", getAllHotel)
        router.get("/countByCity", countByCity);
        router.get("/room/:id", getHotelRooms)

export default router