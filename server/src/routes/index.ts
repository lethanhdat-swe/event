import { Router } from "express";
import healthRouter from "./health.route";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import appSettingRouter from "./app-setting.route";
import uploadRouter from "./upload.route";

const router = Router();

router.use("/health", healthRouter);
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/app-settings", appSettingRouter);
router.use("/uploads", uploadRouter);

export default router;
