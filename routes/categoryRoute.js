import express from "express";
import { requireSignIn, isAdmin } from "./../middlewares/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "./../controller/categoryController.js";

const router = express.Router();

//routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)

//get ALL category
router.get('/get-category',categoryController)

//single category
router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete('/delete-category/:id',deleteCategoryController)


export default router;
