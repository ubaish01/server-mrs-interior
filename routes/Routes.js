import express from "express"
import { contactUs,  } from "../controllers/otherController.js";

const router = express.Router();

//CONTACT US 
router.post("/contactus",contactUs);


export default  router