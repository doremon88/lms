/* eslint-disable no-undef */
import express, { Express, Router } from "express";
import dotenv from "dotenv";
import cors from "cors";

import health from "./routes/health";
import loginRouter from "./routes/login";
import registerRouter from "./routes/register";

dotenv.config();

async function main() {
  const app: Express = express();
  const router: Router = express.Router();

  const PORT = process.env.PORT || 8082;
  const ROUTE_PREFIX = process.env.ROUTE_PREFIX || "/";

  // Setup middleware
  // app.use(pino);
  app.use(cors({
    credentials: true,
    origin: [
      '*', 
      'http://localhost:5173'
    ]
  }));
  app.use(express.json());
  // app.use(authMiddleware);

  // Setup routes
  router.use("/auth/login", loginRouter);
  router.use("/auth/register", registerRouter);
  router.use("/health", health);

  app.use(ROUTE_PREFIX, router);

  // Setup error handler
  // app.use((err, req, res, next) => {
  //   if (res.headersSent) {
  //     return next(err);
  //   }
  //   req.log.error("Uncaught Server Error:");
  //   req.log.error(err);

  //   res.status(500);
  //   res.json({ errors: [{ message: err.message || "Internal Server Error" }] });
  // });

  app.listen(PORT, () => {
    // pino.logger.info(`Server listening on port ${PORT}`);
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
}

main();