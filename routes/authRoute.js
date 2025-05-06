import express from "express";
import {
  registercontroller,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getAllOrdersController,
  orderStatusController,
  getOrdersController,
  getAllUsers,
  getAllTokens,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
} from "../controller/productController.js";

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
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);
 
//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

//get-all-tokens
router.get('/get-tokens/:Id',requireSignIn,getAllTokens)

//get all users
router.get("/get-users",requireSignIn,isAdmin,getAllUsers)


//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
