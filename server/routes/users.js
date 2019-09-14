import express from "express";
import { userController } from "../controllers";

const router = express.Router();

const {
  createUser,
  getOneUser,
  getAllUsers,
  updateUserDetails,
  deleteUser
} = userController;

router.post("/register", createUser);
router.get("/allUsers", getAllUsers);
router.get("/:id", getOneUser);
router.patch("/:id", updateUserDetails);
router.delete("/:id", deleteUser);

module.exports = router;
