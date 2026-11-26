import express from "express";
import healthRouter from "./modules/health/health.routes.js";

const app = express();

// Middleware configuration
app.use(express.json());


// Routes configuration
app.use("/health", healthRouter);

app.get("/", (_req, res) => {
    res.send("RetailOps API is running");
});




export default app;