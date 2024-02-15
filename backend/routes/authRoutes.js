import express from "express";
import {
  register,
  getUsers,
  deleteUser,
  VerifyAccount,
  login,
  user
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";     

const router = express.Router();

router.route("/register")
      .post(register)
      .get(getUsers);

router.route("/register/:id")
       .delete(deleteUser);

router.route("/verify/:token")
      .get(VerifyAccount);       


router.route("/login")
      .post(login);

router.route("/user")
      .get(authMiddleware, user);


export default router;
