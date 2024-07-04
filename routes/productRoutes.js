import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountControlller,
  productFiltersController,
  productListControlller,
  productPhotoController,
  searchProductController,
  updateProductController,
} from "../controller/productController.js";
import formidable from "express-formidable";


const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product
router.post('/product-filters',productFiltersController)

//product count
router.get('/product-count',productCountControlller)

//product per page
router.get('/product-list/:page',productListControlller)

//search product
router.get('/search/:keyword',searchProductController)

export default router;
