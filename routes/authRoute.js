import express from "express";
import {
  registercontroller,
  loginController,
  testController,
  forgotPasswordController
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST`
router.post("/register", registercontroller);

//POST || LOGIN
router.post("/login", loginController);

//forgot password||POST
router.post("/forgot-password", forgotPasswordController);

router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//test route

export default router;
