import { Hono } from "hono";
import { cors } from "hono/cors";

import { FRONTEND_URL } from "@/config";

const app = new Hono();

app.use(
  "*",
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);

app.get("/api/health", (c) => c.json({ status: "ok", timestamp: new Date().toISOString() }));

export default app;
