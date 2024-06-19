import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.status(200).json({
      status: "ok",
    });
  })
);

export default router;
